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
  return (
    <div>
      {files.map((file) => (
        <FileRow
          key={file.Id}
          file={file}
          onClick={onClick}
          onToggleVisibility={onToggleVisibility}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};
