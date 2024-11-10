import React from "react";
import { useForm, Controller } from "react-hook-form";
import { FilePanelComponent } from "./file-panel/file-panel-component";

type FilePanelFieldProps = {
  name: string;
  control: any;
};

export const FilePanelField: React.FC<FilePanelFieldProps> = ({
  name,
  control,
}: FilePanelFieldProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => <FilePanelComponent {...field} />}
    />
  );
};
