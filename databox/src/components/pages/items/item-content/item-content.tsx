import { Item } from "@/crud/item";
import {
  ContentPage,
  FieldParam,
  FieldType,
} from "@/components/features/content-page/content-page";
const fieldParams = [
  { name: "title", title: "Title", type: FieldType.text, gridSize: 12 },
  {
    name: "description",
    title: "Description",
    type: FieldType.text,
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
