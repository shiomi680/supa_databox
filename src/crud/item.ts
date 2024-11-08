import { createClient } from "@supabase/supabase-js";
import { FileData } from "./file-data";

// Initialize Supabase client
const supabaseUrl = "http://localhost:8000";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyAgCiAgICAicm9sZSI6ICJhbm9uIiwKICAgICJpc3MiOiAic3VwYWJhc2UtZGVtbyIsCiAgICAiaWF0IjogMTY0MTc2OTIwMCwKICAgICJleHAiOiAxNzk5NTM1NjAwCn0.dc_X5iR_VP_qT0zsiyj_I_OZ2T9FtRU2BBNWN8Bu4GE";
const supabase = createClient(supabaseUrl, supabaseKey);

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
