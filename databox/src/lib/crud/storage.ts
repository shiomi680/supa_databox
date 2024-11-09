import { supabase } from "@/lib/supabase/supabase";
import { FileData } from "./file-data";

// Function to upload a file to Supabase Storage
export async function uploadFile(bucketName: string, file: File) {
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
  } as FileData; // ストレージとDBのデータを返す
}

// Function to download a file from Supabase Storage
export async function downloadFile(bucketName: string, filePath: string) {
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

export async function downloadFileByFileId(fileId: string) {
  const { data, error } = await supabase
    .from("files")
    .select("*")
    .eq("id", fileId);
  if (data && data[0]) {
    return downloadFile(data[0].bucket, data[0].path);
  }
  return null;
}
