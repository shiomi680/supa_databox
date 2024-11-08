import { SidebarComponent } from "@/components/layouts/menu-drawer/menu-sidebar";
import { ItemMenu } from "./item-menu/item-menu";
import { Item } from "@/crud/item";
import { useEffect, useState } from "react";
import { fetchItems } from "@/crud/item";

export function ItemPage() {
  const [items, setItems] = useState<Item[]>([]);
  useEffect(() => {
    const loadItems = async () => {
      const fetchedItems = await fetchItems();
      setItems(fetchedItems);
    };

    loadItems();
  }, []);
  return (
    <SidebarComponent title="Item Page" footer="Footer">
      <ItemMenu items={items} />
    </SidebarComponent>
  );
}
