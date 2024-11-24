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
  ContentFormLayout,
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
import { Controller } from "react-hook-form";
import { Card } from "@/components/ui/card";

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

export type ItemContentProps = {
  item?: Item;
  onSubmit: (data: any) => void;
  onChangeRevision: (revision: Revision) => void;
};

export function KabuContent({
  share,
  onSubmit,
  onChangeRevision,
}: ItemContentProps) {
  const defaultValues = useMemo(
    () => ({
      Code: share?.Code || "-",
      Name: share?.Name || "",
      EnglishName: share?.EnglishName || "",
      Sector33Code: share?.Sector33Code || "",
      Sector33Name: share?.Sector33Name || "",
      Sector17Code: share?.Sector17Code || "",
      Sector17Name: share?.Sector17Name || "",
      MarketCode: share?.MarketCode || "",
      MarketName: share?.MarketName || "",
    }),
    [share]
  );
  useEffect(() => {
    console.log(share);
  }, [share]);

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
      <ContentFormLayout>
        <form onSubmit={handleSubmit(onSubmit)}>
          <GeneralForm
            register={register}
            control={control}
            fieldParams={fieldParams}
          />
          {/* <ContentFileLayout>
            <Controller
              name={"Files"}
              control={control}
              render={({ field }) => <ItemFilesPanel {...field} />}
            />
          </ContentFileLayout> */}

          {/* <TagPanel /> */}

          <Button type="submit">Submit</Button>
        </form>
      </ContentFormLayout>
    </ContentPageLayout>
  );
}
