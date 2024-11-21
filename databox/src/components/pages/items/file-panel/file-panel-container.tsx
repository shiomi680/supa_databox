import React, { useState, useEffect } from "react";
import { FilePanel } from "@/components/features/file-component/file-panel/file-panel";
import { useItemFiles } from "@/lib/hooks/useUploadFiles";
import { FileEntity } from "@/lib/crud/file-data";

type FilePanelProps = {
  value?: FileEntity[];
  onChange: (value: FileEntity[]) => void;
};

export const ItemFilesPanel: React.FC<FilePanelProps> = ({
  value,
  onChange,
}: FilePanelProps) => {
  const { uploadFiles, deleteFile, uploadedFiles, downloadFile } =
    useItemFiles(value);

  useEffect(() => {
    onChange(uploadedFiles);
  }, [uploadedFiles, onChange]);

  const onToggleVisibilityFile = (id: string) => {
    // ファイルの表示/非表示を切り替える
    console.log(id);
  };
  return (
    <FilePanel
      files={uploadedFiles}
      onToggleVisibility={onToggleVisibilityFile}
      onClick={downloadFile}
      onDelete={deleteFile}
      onDropFiles={uploadFiles}
    ></FilePanel>
  );
};
