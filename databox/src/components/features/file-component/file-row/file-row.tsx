import React from "react";
import { FileEntity } from "@/lib/crud/file-data";

type FileRowProps = {
  key?: string;
  file: FileEntity;
  onClick?: (id: string) => void;
  onToggleVisibility?: (id: string) => void;
  onDelete?: (id: string) => void;
};

export const FileRow: React.FC<FileRowProps> = ({
  key,
  file,
  onClick,
  onToggleVisibility,
  onDelete,
}) => {
  // ファイルの情報とボタンを表示する
  //リンクがあるので、ダウンロードできる
  const handleDownloadFile = (event: React.MouseEvent) => {
    event.preventDefault(); // Prevent default action
    onClick?.(file.Id);
  };

  return (
    <div
      key={key ?? file.Id}
      style={{
        display: "flex",
        alignItems: "center",
        padding: "10px",
        borderBottom: "1px solid #f0f0f0",
      }}
    >
      {" "}
      {/* <button onClick={() => onToggleVisibility?.(file.Id)}>
        {file.Visible ? "Hide" : "Show"}
      </button> */}
      <button onClick={(event) => handleDownloadFile(event)}>
        {file.Name}
      </button>
      <button onClick={() => onDelete?.(file.Id)}>Delete</button>
    </div>
  );
};
