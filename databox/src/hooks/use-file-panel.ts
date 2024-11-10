import { useState } from "react";
import { FileEntity } from "@/lib/crud/file-data";
import { supabase } from "@/lib/supabase/supabase";
import { uploadFile } from "@/lib/crud/storage";

export type FileData = {
  Id: string;
  FileName: string;
  Url: string;
  Visible: boolean;
};

const downloadPath = "/api/download";

function fileEntityToFileData(fileEntity: FileEntity): FileData {
  return {
    Id: fileEntity.Id,
    FileName: fileEntity.Name,
    Url: `${downloadPath}/${fileEntity.Id}`,
    Visible: true,
  } as FileData;
}

export const useFilePanel = (
  value: FileData[],
  onChange: (value: FileData[]) => void
) => {
  const [files, setFiles] = useState<FileData[]>(value ?? []);

  const onDropFiles = async (droppedFiles: File[]) => {
    // ファイルをアップロードする
    const uploadedFiles = await Promise.all(
      droppedFiles.map(async (file) => {
        const fileData = await uploadFile(supabase, "test", file);
        return fileData;
      })
    );
    console.log(uploadedFiles);
    // ファイルデータでfilesを更新する
    const newFiles = uploadedFiles
      .filter((file) => file !== null)
      .map(fileEntityToFileData);
    const updatedFiles = [...files, ...newFiles];
    setFiles(updatedFiles);
    onChange(updatedFiles);
  };
  const onDeleteFile = (id: string) => {
    // ファイルを削除する
    const updatedFiles = files.filter((file) => file.Id !== id);
    setFiles(updatedFiles);
    onChange(updatedFiles);
  };

  const onToggleVisibilityFile = (id: string) => {
    // ファイルの表示/非表示を切り替える
    const updatedFiles = files.map((file) =>
      file.Id === id ? { ...file, Visible: !file.Visible } : file
    );
    setFiles(updatedFiles);
    onChange(updatedFiles);
  };
  return { files, onDropFiles, onDeleteFile, onToggleVisibilityFile };
};
