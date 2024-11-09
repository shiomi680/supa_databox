import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { FileField } from "../file-field/file-field";

type FilePanelProps = {
  initialFiles: {
    Id: string;
    FileName: string;
    Url: string;
    Visible: boolean;
  }[];
};

export const FilePanel: React.FC<FilePanelProps> = ({
  initialFiles,
}: FilePanelProps) => {
  return (
    <div>
      {initialFiles.map((file) => (
        <FileField key={file.Id} file={file} />
      ))}
    </div>
  );
};
