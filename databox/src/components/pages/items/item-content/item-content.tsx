import { Item } from "@/lib/crud/item";
import {
  ContentPage,
  FieldParam,
  FieldType,
} from "@/components/features/content-page/content-page";

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

export function ItemContent({ item, onSubmit }: ItemContentProps) {
  return item ? (
    <ContentPage
      defaultValues={item}
      fieldParams={fieldParams}
      onSubmit={onSubmit}
    />
  ) : (
    <div>Loading...</div>
  );
}
