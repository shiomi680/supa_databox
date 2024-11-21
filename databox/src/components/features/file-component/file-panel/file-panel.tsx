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
  // New function to handle file drop
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const droppedFiles = Array.from(event.dataTransfer.files);
    if (onDropFiles) {
      onDropFiles(droppedFiles);
    }
  };

  // New function to allow dropping
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };
  return (
    <div onDrop={handleDrop} onDragOver={handleDragOver}>
      {files.length === 0 ? (
        <div className="drop-area">ファイルをここにドロップしてください</div>
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
