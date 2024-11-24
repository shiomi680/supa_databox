import {
  FieldParam,
  FieldType,
} from "@/components/features/content-page/content-page";

import {
  ContentPageLayout,
  ContentFormLayout,
} from "@/components/layouts/content-page/content-page-layout";
import { GeneralForm } from "@/components/features/general-form/general-form";
import { Button } from "@/components/ui/button";
import { Control, UseFormRegister } from "react-hook-form";

const fieldParams = [
  {
    name: "Code",
    title: "Code",
    type: FieldType.text,
    gridSize: 12,
  },
  {
    name: "Name",
    title: "Name",
    type: FieldType.text,
    gridSize: 12,
  },
  {
    name: "EnglishName",
    title: "EnglishName",
    type: FieldType.text,
    gridSize: 12,
  },
] as FieldParam[];

export type KabuFormValues = {
  Code: string;
  Name: string;
  EnglishName: string;
};

export type KabuContentProps = {
  register: UseFormRegister<KabuFormValues>;
  control: Control<KabuFormValues>;
  onSubmit: (data: any) => void;
};

export function KabuContent({ register, control, onSubmit }: KabuContentProps) {
  return (
    <ContentPageLayout>
      <ContentFormLayout>
        <form onSubmit={onSubmit}>
          <GeneralForm
            register={register}
            control={control}
            fieldParams={fieldParams}
          />

          <Button type="submit">Submit</Button>
        </form>
      </ContentFormLayout>
    </ContentPageLayout>
  );
}
