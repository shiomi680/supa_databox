import React, { useState } from "react";
import { FilePanel } from "./file-panel";

type FileType = {
  Id: string;
  FileName: string;
  Url: string;
  Visible: boolean;
};

type FilePanelProps = {
  value?: FileType[];
  onChange: (value: FileType[]) => void;
};

export const FilePanelComponent: React.FC<FilePanelProps> = ({
  value,
  onChange,
}: FilePanelProps) => {
  const [files, setFiles] = useState<FileType[]>(value ?? []);
  //挙動付きのFilePanel
  const onDropFiles = (droppedFiles: File[]) => {
    // ファイルをアップロードする
    console.log(droppedFiles);
    // ファイルデータでfilesを更新する
    //setFiles(files + droppedFiles);
  };
  const onDeleteFile = (id: string) => {
    // ファイルを削除する
    console.log(id);
  };

  const onToggleVisibilityFile = (id: string) => {
    // ファイルの表示/非表示を切り替える
    console.log(id);
  };

  return (
    <FilePanel
      files={files}
      onToggleVisibility={onToggleVisibilityFile}
      onDelete={onDeleteFile}
      onDropFiles={onDropFiles}
    ></FilePanel>
  );
};
