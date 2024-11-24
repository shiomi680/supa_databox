import React from "react";
import {
  FieldParam,
  FieldType,
} from "@/components/features/general-form/general-field/general-field";
import { useWatch } from "react-hook-form";
import { SwitchForm } from "../switch-form/switch-form";
const ShareInfoParams = [
  {
    name: "Info.Code",
    title: "Code",
    type: FieldType.text,
    gridSize: 12,
  },
  {
    name: "Info.Name",
    title: "Name",
    type: FieldType.text,
    gridSize: 12,
  },
  {
    name: "Info.EnglishName",
    title: "EnglishName",
    type: FieldType.text,
    gridSize: 12,
  },
  {
    name: "Info.Sector33Code",
    title: "Sector33Code",
    type: FieldType.text,
    gridSize: 12,
  },
  {
    name: "Info.Sector17Code",
    title: "Sector17Code",
    type: FieldType.text,
    gridSize: 12,
  },
  {
    name: "Info.MarketCode",
    title: "MarketCode",
    type: FieldType.text,
    gridSize: 12,
  },
] as FieldParam[];

type ShareInfoFormProps = {
  register: any;
  control: any;
};

export const ShareInfoForm = ({ register, control }: ShareInfoFormProps) => {
  const formValues = useWatch({ control });

  return (
    <SwitchForm
      fieldParams={ShareInfoParams}
      register={register}
      control={control}
    >
      <div>
        <h3>{formValues.Info.Code}</h3>
        <h1>{formValues.Info.Name}</h1>
      </div>
    </SwitchForm>
  );
};
