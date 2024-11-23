import { useEffect, useState } from "react";
import { fetchItems, Item } from "@/lib/crud/item";
import { ItemMenuProps } from "./item-menu";
export const useItemMenu = () => {
  //サイドバー
  const [items, setItems] = useState<Item[]>([]);
  //初期化
  useEffect(() => {
    //サイドバーの初期化
    const loadItems = async () => {
      const fetchedItems = await fetchItems();
      setItems(fetchedItems);
    };
    loadItems();
  }, []);

  const props: ItemMenuProps = {
    items,
  };

  return { props };
};
