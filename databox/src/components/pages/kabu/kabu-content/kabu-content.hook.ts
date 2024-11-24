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
import { KabuFormValues, KabuContentProps } from "./kabu-content";
import { useForm } from "react-hook-form";

export const useKabuContent = (share_id?: string) => {
  const router = useRouter();
  const { register, control } = useForm<KabuFormValues>();
  // //メインコンテンツ
  // const [item, setItem] = useState<Item | undefined>(undefined);
  // //初期化
  // useEffect(() => {
  //   //サイドバーの初期化

  //   //メインコンテンツの初期化
  //   const loadItem = async () => {
  //     if (revision_id) {
  //       const fetchedItem = await fetchItemWithRevision(revision_id);
  //       if (fetchedItem) {
  //         setItem(fetchedItem);
  //       }
  //     }
  //   };
  //   loadItem();
  // }, [revision_id]);

  //メインコンテンツのデータ更新
  const onSubmit = async (data: KabuFormValues) => {};

  const props: KabuContentProps = {
    onSubmit,
    register,
    control,
  };

  return { props };
};
