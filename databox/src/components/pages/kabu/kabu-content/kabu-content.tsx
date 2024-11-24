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
import { ShareInfoForm } from "./share-info-form/share-info-form";

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

const PriceRelationParams = [
  {
    name: "PriceRelation.StockCapitalization",
    title: "StockCapitalization",
    type: FieldType.number,
    gridSize: 12,
  },
  {
    name: "PriceRelation.StockPriceDate",
    title: "StockPriceDate",
    type: FieldType.date,
    gridSize: 12,
  },
  {
    name: "PriceRelation.PER",
    title: "PER",
    type: FieldType.number,
    gridSize: 12,
  },
  {
    name: "PriceRelation.PBR",
    title: "PBR",
    type: FieldType.number,
    gridSize: 12,
  },
] as FieldParam[];

type ShareInfoFormValues = {
  Code: string;
  Name: string;
  EnglishName: string;
  Sector33Code: string;
  Sector17Code: string;
  MarketCode: string;
};
export type KabuFormValues = {
  Code: string;
  Name: string;
  EnglishName: string;
  Info: ShareInfoFormValues;
  // Swot: Swot;
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
          {/* <GeneralForm
            register={register}
            control={control}
            fieldParams={ShareInfoParams}
          /> */}
          <ShareInfoForm register={register} control={control} />
          {/* <GeneralForm
            register={register}
            control={control}
            fieldParams={PriceRelationParams}
          /> */}
          <Button type="submit">Submit</Button>
        </form>
      </ContentFormLayout>
    </ContentPageLayout>
  );
}
