import { FileData } from "./file-data";
import { supabase } from "@/lib/supabase/supabase";

export type ItemRevision = {
  Id: number;
  RevisionNumber: number;
  RevisionDate: string;
  Description: string;
};
// Define the Item type
export type Item = {
  Id: number;
  ModelNumber: string;
  ItemName: string;
  ItemDescription: string;
  Cost: number;
  SalePrice: number;
  Files: FileData[];
  Tags: string[];
  Revisions?: ItemRevision[];
};

// Fetch items with their latest revisions, files, and tags
export async function fetchItems() {
  const { data: items, error } = await supabase.from("latest_item_details")
    .select(`
      id,
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
        Id: item.id,
        ModelNumber: item.model_number,
        ItemName: item.name,
        ItemDescription: item.item_description,
        Cost: item.cost,
        SalePrice: item.sale_price,
        Files: item.item_files.map((file) => ({
          Id: file.file_id,
          Name: file.files.name,
          Path: file.files.path,
        })) as FileData[],
        Tags: item.item_tags.map((tag) => tag.tag),
      } as Item)
  );
}

// Fetch a specific item by its ID, including its revisions
export async function fetchItem(item_id: number) {
  const { data: item, error } = await supabase
    .from("latest_item_details")
    .select(
      `
      id,
      model_number,
      name,
      item_description,
      cost,
      sale_price,
      item_files(file_id, files(name, path)), 
      item_tags(tag)
    `
    )
    .eq("id", item_id)
    .single(); // Use single() to get a single item
  const { data: revisions, error: revisionsError } = await supabase
    .from("item_revisions")
    .select("id, revision_number, revision_date, description")
    .eq("item_id", item_id);

  if (error) {
    console.error("Error fetching item:", error);
    return null; // Return null if there's an error
  }

  return {
    Id: item.id,
    ModelNumber: item.model_number,
    ItemName: item.name,
    ItemDescription: item.item_description,
    Cost: item.cost,
    SalePrice: item.sale_price,
    Files: item.item_files.map((file) => ({
      Id: file.file_id,
      Name: file.files.name,
      Path: file.files.path,
    })) as FileData[],
    Tags: item.item_tags.map((tag) => tag.tag),
    Revisions: revisions?.map((revision) => ({
      Id: revision.id,
      RevisionNumber: revision.revision_number,
      RevisionDate: revision.revision_date,
      Description: revision.description,
    })),
  } as Item;
}
