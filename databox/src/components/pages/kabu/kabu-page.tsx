import { KabuContent, KabuContentProps } from "./kabu-content/kabu-content";
import { KabuMenu } from "./kabu-menu/kabu-menu";
import { Layout } from "@/components/layouts/base-layout/base-layout";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { KabuMenuProps } from "./kabu-menu/kabu-menu";

type KabuPageProps = {
  kabuMenuProps: KabuMenuProps;
  kabuContentProps: KabuContentProps;
};

export const KabuPage = ({
  kabuMenuProps,
  kabuContentProps,
}: KabuPageProps) => {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel>
        <KabuMenu {...kabuMenuProps} />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel>
        <Layout title="databox">
          <KabuContent {...kabuContentProps} />
        </Layout>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};
