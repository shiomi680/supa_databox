import { ItemContent } from "./item-content/item-content";
import { ItemMenu } from "./item-menu/item-menu";
import { Layout } from "@/components/layouts/base-layout/base-layout";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ItemMenuProps } from "./item-menu/item-menu";
import { ItemContentProps } from "./item-content/item-content";

type ItemPageProps = {
  itemMenuProps: ItemMenuProps;
  itemContentProps: ItemContentProps;
};

export const ItemPage = ({
  itemMenuProps,
  itemContentProps,
}: ItemPageProps) => {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel>
        <ItemMenu {...itemMenuProps} />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel>
        <Layout title="databox">
          <ItemContent {...itemContentProps} />
        </Layout>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};
