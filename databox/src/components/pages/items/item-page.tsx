import { SidebarComponent } from "@/components/layouts/menu-drawer/menu-sidebar";
import { ItemMenu } from "./item-menu/item-menu";
import { createItem, Item } from "@/lib/crud/item";
import { useEffect, useState } from "react";
import { fetchItems, fetchItem } from "@/lib/crud/item";
import { ItemContent } from "./item-content/item-content";

type ItemPageProps = {
  item_id?: string;
};

export function ItemPage({ item_id }: ItemPageProps) {
  //サイドバー
  const [items, setItems] = useState<Item[]>([]);
  //メインコンテンツ
  const [item, setItem] = useState<Item | undefined>(undefined);
  //初期化
  useEffect(() => {
    //サイドバーの初期化
    const loadItems = async () => {
      const fetchedItems = await fetchItems();
      setItems(fetchedItems);
    };
    //メインコンテンツの初期化
    const loadItem = async () => {
      if (item_id) {
        const fetchedItem = await fetchItem(item_id);
        if (fetchedItem) {
          setItem(fetchedItem);
        }
      }
    };
    loadItems();
    loadItem();
  }, [item_id]);

  //メインコンテンツのデータ更新
  const onSubmit = async (data: any) => {
    console.log(data);
    try {
      const newItem = await createItem(data);
      if (newItem) {
        setItem(newItem);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <SidebarComponent title="Item Page" footer="Footer">
        <ItemMenu items={items} />
      </SidebarComponent>
      {(item_id && item) || (!item_id && !item) ? (
        <ItemContent item={item} onSubmit={onSubmit} />
      ) : (
        <></>
      )}
    </div>
  );
}
