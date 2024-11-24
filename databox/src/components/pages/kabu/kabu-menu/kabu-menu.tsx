import { ItemSelectorPanel } from "@/components/features/item-select/item-select";
import { Item } from "@/lib/crud/item";
import path from "path";
import { ColumnsDef } from "@/components/features/item-select/item-select";
import { Share, ShareInfo } from "@/lib/types/kabu";

const SHARE_PAGE_URL = "/share";

export type KabuMenuProps = {
  shares: ShareInfo[];
};

const gridColumnsDef: ColumnsDef[] = [
  {
    field: "Code",
    headerName: "Code",
    link: (data: ShareInfo) => path.join(SHARE_PAGE_URL, data.Id.toString()),
  },
  {
    field: "Name",
    headerName: "Name",
    link: (data: ShareInfo) => path.join(SHARE_PAGE_URL, data.Id.toString()),
  },
];

export const KabuMenu = ({ shares }: KabuMenuProps) => {
  return (
    <ItemSelectorPanel
      modeLink={true}
      items={shares}
      idName="Id"
      gridColumnsDef={gridColumnsDef}
    />
  );
};
