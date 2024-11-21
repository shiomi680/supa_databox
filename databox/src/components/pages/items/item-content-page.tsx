import { Item } from "@/lib/crud/item";
import { ItemContent, ItemFormValues } from "./item-content/item-content";
import { Revision } from "@/lib/crud/revision";
import { Layout } from "@/components/layouts/base-layout/base-layout";

type ItemPageProps = {
  revision_id?: string;
  item?: Item;
  onSubmit: (data: ItemFormValues) => void;
  onChangeRevision: (revision: Revision) => void;
};

export function ItemContentPage({
  revision_id,
  item,
  onSubmit,
  onChangeRevision,
}: ItemPageProps) {
  return (
    <Layout title="databox">
      {(revision_id && item) || (!revision_id && !item) ? (
        <ItemContent
          item={item}
          onSubmit={onSubmit}
          onChangeRevision={onChangeRevision}
        />
      ) : (
        <></>
      )}
    </Layout>
  );
}
