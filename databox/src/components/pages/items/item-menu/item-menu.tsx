import { ItemSelectorPanel } from "@/components/features/item-select/item-select";
import { Item } from "@/crud/item";
import { useEffect, useState } from "react";
import { fetchItems } from "@/crud/item";

export const ItemMenu = () => {
  const [items, setItems] = useState<Item[]>([]);
  useEffect(() => {
    const loadItems = async () => {
      const fetchedItems = await fetchItems();
      setItems(fetchedItems);
    };

    loadItems();
  }, []);

  return (
    <ItemSelectorPanel
      modeLink={true}
      items={items}
      idName="id"
      gridColumnsDef={[]}
    />
  );
};
