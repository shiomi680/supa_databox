import {
  FieldParam,
  FieldType,
} from "@/components/features/content-page/content-page";

import {
  ContentPageLayout,
  ContentRevisionLayout,
  ContentFileLayout,
  ContentFormLayout,
} from "@/components/layouts/content-page/content-page-layout";
import { GeneralForm } from "@/components/features/general-form/general-form";
import { Button } from "@/components/ui/button";
import { Control, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";
import { RevisionSelect } from "@/components/features/revision-select/revision-select";
import { Revision } from "@/lib/crud/revision";
import { FileEntity } from "@/lib/crud/file-data";
import { ItemFilesPanel } from "../file-panel/file-panel-container";
import { Controller } from "react-hook-form";

const fieldParams = [
  {
    name: "ModelNumber",
    title: "ModelNumber",
    type: FieldType.text,
    gridSize: 12,
  },
  {
    name: "ItemName",
    title: "ItemName",
    type: FieldType.text,
    gridSize: 12,
  },
  {
    name: "ItemDescription",
    title: "ItemDescription",
    type: FieldType.text,
    rows: 3,
    gridSize: 12,
  },
  {
    name: "Cost",
    title: "Cost",
    type: FieldType.number,
    gridSize: 6,
  },
  {
    name: "SalePrice",
    title: "SalePrice",
    type: FieldType.number,
    gridSize: 6,
  },
] as FieldParam[];

export type ItemFormValues = {
  ModelNumber: string;
  ItemName: string;
  ItemDescription: string;
  Cost: number;
  SalePrice: number;
  Files: FileEntity[];
};

export type ItemContentProps = {
  onSubmit: (data: any) => void;
  onChangeRevision: (revision: Revision) => void;
  register: UseFormRegister<ItemFormValues>;
  control: Control<ItemFormValues>;
  handleSubmit: UseFormHandleSubmit<ItemFormValues>;
  revision?: Revision;
  revisions: Revision[];
};

export function ItemContent({
  revision,
  revisions,
  onSubmit,
  onChangeRevision,
  register,
  control,
  handleSubmit,
}: ItemContentProps) {
  // const revisions = item?.Revisions ?? [];
  // const revision = revisions.find((r) => r.Id === item?.RevisionId);
  if (!revision) {
    return null;
  }
  return (
    <ContentPageLayout>
      <ContentRevisionLayout>
        <RevisionSelect
          selected={revision}
          revisions={revisions}
          onChange={onChangeRevision}
        />
      </ContentRevisionLayout>
      <ContentFormLayout>
        <form onSubmit={handleSubmit(onSubmit)}>
          <GeneralForm
            register={register}
            control={control}
            fieldParams={fieldParams}
          />
          <ContentFileLayout>
            <Controller
              name={"Files"}
              control={control}
              render={({ field }) => <ItemFilesPanel {...field} />}
            />
          </ContentFileLayout>

          <Button type="submit">Submit</Button>
        </form>
      </ContentFormLayout>
    </ContentPageLayout>
  );
}
