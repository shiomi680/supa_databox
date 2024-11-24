import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Item,
  ItemCreate,
  ItemRevisionCreate,
  Revision,
  fetchItemWithRevision,
  addItemRevision,
  createItem,
} from "@/lib/crud/item";
import { ItemFormValues, ItemContentProps } from "./kabu-content";

export const useItemContent = (revision_id?: string) => {
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

  const props: ItemContentProps = {
    item,
    onSubmit,
    onChangeRevision,
  };

  return { props };
};
