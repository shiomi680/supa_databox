import React from "react";
import { FileRow } from "../file-row/file-row";
import { FileEntity } from "@/lib/crud/file-data";
type FilePanelProps = {
  files: FileEntity[];
  onClick?: (id: string) => void;
  onToggleVisibility?: (id: string) => void;
  onDelete?: (id: string) => void;
  onDropFiles?: (files: File[]) => void;
};

export const FilePanel: React.FC<FilePanelProps> = ({
  files,
  onClick,
  onToggleVisibility,
  onDelete,
  onDropFiles,
}: FilePanelProps) => {
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const droppedFiles = Array.from(event.dataTransfer.files);
    if (onDropFiles) {
      onDropFiles(droppedFiles);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };
  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      className="drop-area"
      style={{ minHeight: "200px", border: "2px dashed #ccc" }}
    >
      {files.length === 0 ? (
        <div>ファイルをここにドロップしてください</div>
      ) : (
        files.map((file) => (
          <FileRow
            key={file.Id}
            file={file}
            onClick={onClick}
            onToggleVisibility={onToggleVisibility}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
};
