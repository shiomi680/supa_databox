import React from "react";

type FileFieldProps = {
  key?: string;
  file: {
    Id: string;
    FileName: string;
    Url: string;
    Visible: boolean;
  };
  onToggleVisibility?: (id: string) => void;
  onDelete?: (id: string) => void;
};

export const FileField: React.FC<FileFieldProps> = ({
  key,
  file,
  onToggleVisibility,
  onDelete,
}) => {
  // ファイルの情報とボタンを表示する
  //リンクがあるので、ダウンロードできる

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
      <button onClick={() => onToggleVisibility?.(file.Id)}>
        {file.Visible ? "Hide" : "Show"}
      </button>
      <a href={file.Url} download style={{ flex: 1, margin: "0 10px" }}>
        {file.FileName}
      </a>
      <button onClick={() => onDelete?.(file.Id)}>Delete</button>
    </div>
  );
};
