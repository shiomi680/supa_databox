import { SidebarComponent } from "@/components/layouts/menu-drawer/menu-sidebar";
import { ItemMenu } from "./item-menu/item-menu";
import { Item } from "@/lib/crud/item";
import { useEffect, useState } from "react";
import { fetchItems, fetchItem } from "@/lib/crud/item";
import { ItemContent } from "./item-content/item-content";

type ItemPageProps = {
  item_id?: string;
};

export function ItemPage({ item_id }: ItemPageProps) {
  const [items, setItems] = useState<Item[]>([]);
  const [item, setItem] = useState<Item | undefined>(undefined);
  useEffect(() => {
    const loadItems = async () => {
      const fetchedItems = await fetchItems();
      setItems(fetchedItems);
    };
    const loadItem = async () => {
      if (item_id) {
        const fetchedItem = await fetchItem(parseInt(item_id));
        console.log(fetchedItem);
        console.log(item_id);
        if (fetchedItem) {
          setItem(fetchedItem);
        }
      }
    };
    loadItems();
    loadItem();
  }, [item_id]);
  return (
    <div style={{ display: "flex" }}>
      <SidebarComponent title="Item Page" footer="Footer">
        <ItemMenu items={items} />
      </SidebarComponent>
      <ItemContent item={item} onSubmit={() => {}} />
    </div>
  );
}
