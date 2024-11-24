import { KabuPage } from "./kabu-page";
import { useKabuMenu } from "./kabu-menu/kabu-menu.hook";
import { useKabuContent } from "./kabu-content/kabu-content.hook";
type KabuPageContainerProps = {
  share_id?: string;
};

export const KabuPageContainer = ({ share_id }: KabuPageContainerProps) => {
  const { props: kabuMenuProps } = useKabuMenu();
  const { props: kabuContentProps } = useKabuContent(share_id);
  return (
    <KabuPage
      kabuMenuProps={kabuMenuProps}
      kabuContentProps={kabuContentProps}
    />
  );
};
