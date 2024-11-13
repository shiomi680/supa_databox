import { Item } from "@/lib/crud/item";
import {
  ContentPage,
  FieldParam,
  FieldType,
} from "@/components/features/content-page/content-page";

import {
  ContentPageLayout,
  ContentRevisionLayout,
  ContentFileLayout,
  ContentSubmitLayout,
} from "@/components/layouts/content-page/content-page-layout";
import { GeneralForm } from "@/components/features/general-form/general-form";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { RevisionSelect } from "@/components/features/revision-select/revision-select";
import { useState } from "react";
import { Revision } from "@/lib/crud/revision";
import { useMemo, useEffect } from "react";
import { uploadFile } from "@/lib/crud/storage";
import { supabase } from "@/lib/supabase/supabase";
import { FileEntity } from "@/lib/crud/file-data";
import { ItemFilesPanel } from "../file-panel/file-panel-container";
import { Controller } from "react-hook-form";

//Id: number;
// ModelNumber: string;
// ItemName: string;
// ItemDescription: string;
// Cost: number;
// SalePrice: number;
// Files: FileData[];
// Tags: string[];
// Revisions?: ItemRevision[];
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
    gridSize: 12,
  },
  {
    name: "Cost",
    title: "Cost",
    type: FieldType.number,
    gridSize: 12,
  },
  {
    name: "SalePrice",
    title: "SalePrice",
    type: FieldType.number,
    gridSize: 12,
  },
];

export type ItemFormValues = {
  ModelNumber: string;
  ItemName: string;
  ItemDescription: string;
  Cost: number;
  SalePrice: number;
  Files: FileEntity[];
};
// function formValuesToItem(values: ItemFormValues): Item {
//   return {
//     ModelNumber: values.ModelNumber,
//     ItemName: values.ItemName,
//     ItemDescription: values.ItemDescription,
//     Cost: values.Cost,
//     SalePrice: values.SalePrice,
//     Files: [],
//     Tags: [],
//   };
// }
function itemToFormValues(values: Item | undefined): ItemFormValues {
  return {
    ModelNumber: values?.ModelNumber ?? "-",
    ItemName: values?.ItemName ?? "-",
    ItemDescription: values?.ItemDescription ?? "-",
    Cost: values?.Cost ?? 1,
    SalePrice: values?.SalePrice ?? 0,
    Files: values?.Files ?? [],
  };
}
// function fileEntityToFileType(values: FileEntity[]): FileType[] {
//   return values.map((value) => ({
//     Id: value.Id,
//     FileName: value.FileName,
//     Url: value.Url,
//     Visible: value.Visible,
//   }));
// }

type ItemContentProps = {
  item?: Item;
  onSubmit: (data: any) => void;
  onChangeRevision: (revision: Revision) => void;
};

export function ItemContent({
  item,
  onSubmit,
  onChangeRevision,
}: ItemContentProps) {
  const defaultValues = useMemo(
    () => ({
      ModelNumber: item?.ModelNumber || "-",
      ItemName: item?.ItemName || "",
      ItemDescription: item?.ItemDescription || "",
      Cost: item?.Cost || 0,
      SalePrice: item?.SalePrice || 0,
      Files: item?.Files || [],
    }),
    [item]
  );
  useEffect(() => {
    console.log(item);
  }, [item]);

  const { register, handleSubmit, control } = useForm({ defaultValues });
  const revisions = item?.Revisions ?? [];
  const revision = revisions.find((r) => r.Id === item?.RevisionId);

  return (
    <ContentPageLayout>
      <ContentRevisionLayout>
        <RevisionSelect
          selected={revision}
          revisions={revisions}
          onChange={onChangeRevision}
        />
      </ContentRevisionLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <GeneralForm
          register={register}
          control={control}
          fieldParams={fieldParams}
        />
        <Controller
          name={"Files"}
          control={control}
          render={({ field }) => <ItemFilesPanel {...field} />}
        />

        <Button type="submit">Submit</Button>
      </form>
    </ContentPageLayout>
  );
}
