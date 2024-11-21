import { useEffect, useState } from "react";
import {
  fetchItemWithRevision,
  ItemCreate,
  createItem,
  ItemRevisionCreate,
  Item,
  addItemRevision,
} from "@/lib/crud/item";
import { ItemContent, ItemFormValues } from "./item-content/item-content";
import { useRouter } from "next/navigation";
import { Revision } from "@/lib/crud/revision";

type ItemPageProps = {
  revision_id?: string;
};

export function ItemContentPage({ revision_id }: ItemPageProps) {
  const router = useRouter();
  //メインコンテンツ
  const [item, setItem] = useState<Item | undefined>(undefined);
  //初期化
  useEffect(() => {
    //サイドバーの初期化

    //メインコンテンツの初期化
    const loadItem = async () => {
      if (revision_id) {
        const fetchedItem = await fetchItemWithRevision(revision_id);
        if (fetchedItem) {
          setItem(fetchedItem);
        }
      }
    };
    loadItem();
  }, [revision_id]);

  //メインコンテンツのデータ更新
  const onSubmit = async (data: ItemFormValues) => {
    console.log(data);
    if (item) {
      try {
        const revisionData: ItemRevisionCreate = {
          ItemId: item.ItemId,
          Description: data.ItemDescription,
          Item: {
            ModelNumber: data.ModelNumber,
            ItemName: data.ItemName,
            ItemDescription: data.ItemDescription,
            Cost: data.Cost,
            SalePrice: data.SalePrice,
            FileIds: data.Files.map((file) => file.Id),
            Tags: [],
          } as ItemCreate,
        };
        const newRevision = await addItemRevision(revisionData);
        if (newRevision) {
          //リダイレクト TODO
          router.push(`/item/${newRevision.Id}`);
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        const itemData: ItemCreate = {
          ModelNumber: data.ModelNumber,
          ItemName: data.ItemName,
          ItemDescription: data.ItemDescription,
          Cost: data.Cost,
          SalePrice: data.SalePrice,
          FileIds: data.Files.map((file) => file.Id),
          Tags: [],
        };
        const newItem = await createItem(itemData);
        if (newItem) {
          //リダイレクト TODO
          router.push(`/item/${newItem.NewestRevisionId}`);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const onChangeRevision = (revision: Revision) => {
    router.push(`/item/${revision.Id}`);
  };

  return (
    <div>
      {(revision_id && item) || (!revision_id && !item) ? (
        <ItemContent
          item={item}
          onSubmit={onSubmit}
          onChangeRevision={onChangeRevision}
        />
      ) : (
        <></>
      )}
    </div>
  );
}
