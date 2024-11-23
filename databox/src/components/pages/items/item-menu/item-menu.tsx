import { ItemSelectorPanel } from "@/components/features/item-select/item-select";
import { Item } from "@/lib/crud/item";
import path from "path";
import { ColumnsDef } from "@/components/features/item-select/item-select";

const ITEM_PAGE_URL = "/item";

export type ItemMenuProps = {
  items: Item[];
};

const gridColumnsDef: ColumnsDef[] = [
  {
    field: "ModelNumber",
    headerName: "Model Number",
    link: (data: Item) =>
      path.join(ITEM_PAGE_URL, data.NewestRevisionId.toString()),
  },
  {
    field: "ItemName",
    headerName: "Item Name",
    link: (data: Item) =>
      path.join(ITEM_PAGE_URL, data.NewestRevisionId.toString()),
  },
  {
    field: "ItemDescription",
    headerName: "Item Description",
  },
  {
    field: "Cost",
    headerName: "Cost",
  },
  {
    field: "SalePrice",
    headerName: "Sale Price",
  },
  {
    field: "Tags",
    headerName: "Tags",
  },
];

export const ItemMenu = ({ items }: ItemMenuProps) => {
  return (
    <ItemSelectorPanel
      modeLink={true}
      items={items}
      idName="Id"
      gridColumnsDef={gridColumnsDef}
    />
  );
};
