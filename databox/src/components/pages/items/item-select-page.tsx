import { ItemMenu } from "./item-menu/item-menu";
import { useEffect, useState } from "react";
import { fetchItems, Item } from "@/lib/crud/item";

export function ItemSelectPage() {
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

  return <ItemMenu items={items} />;
}
