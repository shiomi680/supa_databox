import { FileEntity } from "./file-data";
import { SupabaseClient } from "@supabase/supabase-js";
// Function to upload a file to Supabase Storage
export async function uploadFile(
  supabase: SupabaseClient,
  bucketName: string,
  file: File
) {
  const currentDate = new Date();
  const month = currentDate.toISOString().slice(0, 7); // YYYY-MM形式
  const timestamp = Date.now(); // タイムスタンプ
  const filePath = `${month}/${timestamp}_${file.name}`; // 月ごとのディレクトリとタイムスタンプ付きファイル名

  const { data, error } = await supabase.storage
    .from(bucketName)
    .upload(filePath, file);

  if (error) {
    console.error("Error uploading file:", error);
    return null;
  }

  // データベースに情報を保存
  const { data: fileData, error: dbError } = await supabase
    .from("files")
    .insert([
      {
        name: file.name,
        bucket: bucketName,
        path: filePath,
        created_at: currentDate,
      },
    ])
    .select();

  if (dbError) {
    console.error("Error saving file data to database:", dbError);
    return null;
  }

  return {
    Id: fileData[0].id,
    Name: file.name,
    Bucket: bucketName,
    Path: filePath,
    CreatedAt: currentDate,
  } as FileEntity; // ストレージとDBのデータを返す
}

// Function to download a file from Supabase Storage
export async function downloadFile(
  supabase: SupabaseClient,
  bucketName: string,
  filePath: string
) {
  // タイムスタンプを除去するための処理
  const cleanedFilePath = filePath.replace(/^\d+_/, ""); // タイムスタンプを除去

  const { data, error } = await supabase.storage
    .from(bucketName)
    .download(cleanedFilePath);

  if (error) {
    console.error("Error downloading file:", error);
    return null;
  }

  return data;
}

export async function downloadFileByFileId(
  supabase: SupabaseClient,
  fileId: string
) {
  const { data, error } = await supabase
    .from("files")
    .select("*")
    .eq("id", fileId);
  if (data && data[0]) {
    return await downloadFile(supabase, data[0].bucket, data[0].path);
  }
  return null;
}
