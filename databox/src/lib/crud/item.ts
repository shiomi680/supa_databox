import { FileEntity } from "./file-data";
import { supabase } from "@/lib/supabase/supabase";
import { Revision } from "./revision";
// Define the Item type
export type Item = {
  ItemId: string;
  RevisionId: string;
  NewestRevisionId: string;
  ModelNumber: string;
  ItemName: string;
  ItemDescription: string;
  Cost: number;
  SalePrice: number;
  Files: FileEntity[];
  Tags: string[];
  Revisions?: Revision[];
};

export type ItemCreate = {
  ModelNumber: string;
  ItemName: string;
  ItemDescription: string;
  Cost: number;
  SalePrice: number;
  FileIds: string[];
  Tags: string[];
};

export type ItemRevisionCreate = {
  ItemId: string;
  Description: string;
  Item: ItemCreate;
};

export async function fetchItemWithRevision(revision_id: string) {
  const { data: target_revision, error } = await supabase
    .from("item_revisions")
    .select(
      `
      id,
      item_id,
      model_number,
      name,
      item_description,
      cost,
      sale_price,
      item_files(file_id, files(name, path)), 
      item_tags(tag)
    `
    )
    .eq("id", revision_id)
    .single(); // Use single() to get a single item
  const { data: revisions, error: revisionsError } = await supabase
    .from("item_revisions")
    .select("id, revision_number, revision_date, description")
    .eq("item_id", target_revision?.item_id);
  if (error) {
    console.error("Error fetching item:", error);
    return null; // Return null if there's an error
  }

  return {
    ItemId: target_revision.item_id,
    RevisionId: target_revision.id,
    NewestRevisionId: revisions?.at(-1)?.id,
    ModelNumber: target_revision.model_number,
    ItemName: target_revision.name,
    ItemDescription: target_revision.item_description,
    Cost: target_revision.cost,
    SalePrice: target_revision.sale_price,
    Files: target_revision.item_files.map((file) => ({
      Id: file.file_id,
      Name: file.files.name,
      Path: file.files.path,
    })) as FileEntity[],
    Tags: target_revision.item_tags.map((tag) => tag.tag),
    Revisions: revisions?.map((revision) => ({
      Id: revision.id,
      RevisionNumber: revision.revision_number,
      RevisionDate: revision.revision_date,
      Description: revision.description,
    })),
  } as Item;
}

// Fetch items with their latest revisions, files, and tags
export async function fetchItems() {
  const { data: items, error } = await supabase.from("latest_item_details")
    .select(`
      id,
      item_id,
      model_number,
      name,
      item_description,
      cost,
      sale_price,
      item_files(file_id, files(name, path)), 
      item_tags(tag)
    `);

  if (error) {
    console.error("Error fetching items:", error);
    return [];
  }
  return items.map(
    (item) =>
      ({
        ItemId: item.item_id,
        NewestRevisionId: item.id,
        ModelNumber: item.model_number,
        ItemName: item.name,
        ItemDescription: item.item_description,
        Cost: item.cost,
        SalePrice: item.sale_price,
        Files: item.item_files.map((file) => ({
          Id: file.file_id,
          Name: file.files.name,
          Path: file.files.path,
        })) as FileEntity[],
        Tags: item.item_tags.map((tag) => tag.tag),
      } as Item)
  );
}

export async function createItem(item: ItemCreate) {
  const newItem = await insertNewItem();
  const newRevision = await insertInitialRevision(item, newItem.id);

  if (!newRevision) {
    return null;
  }

  await insertFilesAndTags(newRevision.id, item);

  return {
    ItemId: newItem.id,
    RevisionId: newRevision.id,
    NewestRevisionId: newRevision.id,
    ModelNumber: item.ModelNumber,
    ItemName: item.ItemName,
    ItemDescription: item.ItemDescription,
    Cost: item.Cost,
    SalePrice: item.SalePrice,
    Revisions: [
      {
        Id: newRevision.id,
        RevisionNumber: 0,
        RevisionDate: newRevision.revision_date,
        Description: item.ItemDescription,
      },
    ],
  } as Item;
}

export async function addItemRevision(revisionData: ItemRevisionCreate) {
  const newRevision = await insertNewRevision(revisionData);

  if (!newRevision) {
    return null;
  }

  await insertFilesAndTags(newRevision.id, revisionData.Item);

  return {
    Id: newRevision.id,
    RevisionNumber: newRevision.revision_number,
    RevisionDate: newRevision.revision_date,
    Description: newRevision.description,
  } as Revision;
}

async function insertNewItem(): Promise<any> {
  const { data: newItem, error: itemError } = await supabase
    .from("items")
    .insert({})
    .select();

  if (itemError) {
    throw new Error(`Error creating item: ${itemError.message}`);
  }

  return newItem[0];
}

async function insertInitialRevision(
  item: ItemCreate,
  itemId: number
): Promise<any> {
  const newRevisionData = {
    item_id: itemId,
    revision_number: 0,
    revision_date: new Date().toISOString(),
    description: item.ItemDescription,
    model_number: item.ModelNumber,
    name: item.ItemName,
    item_description: item.ItemDescription,
    cost: item.Cost,
    sale_price: item.SalePrice,
  };

  const { data: newRevision, error: revisionError } = await supabase
    .from("item_revisions")
    .insert(newRevisionData)
    .select();

  if (revisionError) {
    console.error("Error creating item revision:", revisionError);
    return null;
  }

  return newRevision[0];
}

async function insertAssociatedRecords(
  table: string,
  records: any[]
): Promise<boolean> {
  const { error } = await supabase.from(table).insert(records);
  if (error) {
    console.error(`Error creating item ${table}:`, error);
    return false;
  }
  return true;
}

async function insertFilesAndTags(
  newRevisionId: number,
  item: ItemCreate
): Promise<void> {
  if (item.FileIds && item.FileIds.length > 0) {
    const fileInserts = item.FileIds.map((fileId) => ({
      revision_id: newRevisionId,
      file_id: fileId,
    }));
    await insertAssociatedRecords("item_files", fileInserts);
  }

  if (item.Tags && item.Tags.length > 0) {
    const tagInserts = item.Tags.map((tag) => ({
      revision_id: newRevisionId,
      tag: tag,
    }));
    await insertAssociatedRecords("item_tags", tagInserts);
  }
}

async function insertNewRevision(
  revisionData: ItemRevisionCreate
): Promise<any> {
  const newRevisionData = {
    item_id: revisionData.ItemId,
    revision_number: await getNextRevisionNumber(revisionData.ItemId),
    revision_date: new Date().toISOString(),
    description: revisionData.Description,
    model_number: revisionData.Item.ModelNumber,
    name: revisionData.Item.ItemName,
    item_description: revisionData.Item.ItemDescription,
    cost: revisionData.Item.Cost,
    sale_price: revisionData.Item.SalePrice,
  };

  const { data: newRevision, error: revisionError } = await supabase
    .from("item_revisions")
    .insert(newRevisionData)
    .select();

  if (revisionError) {
    console.error("Error creating item revision:", revisionError);
    return null;
  }

  return newRevision[0];
}

async function getNextRevisionNumber(itemId: string): Promise<number> {
  const { data: revisions, error } = await supabase
    .from("item_revisions")
    .select("revision_number")
    .eq("item_id", itemId)
    .order("revision_number", { ascending: false })
    .limit(1);

  if (error) {
    console.error("Error fetching revision number:", error);
    return 0;
  }

  return revisions.length > 0 ? revisions[0].revision_number + 1 : 0;
}
