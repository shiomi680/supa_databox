import React from "react";
import { FileRow } from "../file-row/file-row";

type FilePanelProps = {
  files: {
    Id: string;
    FileName: string;
    Url: string;
    Visible: boolean;
  }[];
  onToggleVisibility?: (id: string) => void;
  onDelete?: (id: string) => void;
  onDropFiles?: (files: File[]) => void;
};

export const FilePanel: React.FC<FilePanelProps> = ({
  files,
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
          onToggleVisibility={onToggleVisibility}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};
