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

type ItemContentProps = {
  item?: Item;
  onSubmit: (data: any) => void;
};

type ItemFormValues = {
  ModelNumber: string;
  ItemName: string;
  ItemDescription: string;
  Cost: number;
  SalePrice: number;
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
  };
}

export function ItemContent({ item, onSubmit }: ItemContentProps) {
  const defaultValues = useMemo(
    () => ({
      ModelNumber: item?.ModelNumber || "-",
      ItemName: item?.ItemName || "",
      ItemDescription: item?.ItemDescription || "",
      Cost: item?.Cost || 0,
      SalePrice: item?.SalePrice || 0,
    }),
    [item]
  );
  useEffect(() => {
    console.log(defaultValues);
  }, [defaultValues]);

  const { register, handleSubmit, control } = useForm({ defaultValues });
  const revisions = item?.Revisions ?? [];
  const [revision, setRevision] = useState<Revision | undefined>(
    item?.Revisions?.at(-1)
  );
  return (
    <ContentPageLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <ContentRevisionLayout>
          <RevisionSelect
            selected={revision}
            revisions={revisions}
            onChange={setRevision}
          />
        </ContentRevisionLayout> */}

        <GeneralForm
          register={register}
          control={control}
          fieldParams={fieldParams}
        />

        <Button type="submit">Submit</Button>
      </form>
    </ContentPageLayout>
  );
}
