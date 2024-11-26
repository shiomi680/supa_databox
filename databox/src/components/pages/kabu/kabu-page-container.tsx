import { KabuPage } from "./kabu-page";
import { useKabuMenu } from "./kabu-menu/kabu-menu.hook";
import { useKabuContent } from "./kabu-content/kabu-content.hook";
type KabuPageContainerProps = {
  id?: string;
};

export const KabuPageContainer = ({ id }: KabuPageContainerProps) => {
  const { props: kabuMenuProps } = useKabuMenu();
  const { props: kabuContentProps } = useKabuContent(id);
  return (
    <KabuPage
      kabuMenuProps={kabuMenuProps}
      kabuContentProps={kabuContentProps}
    />
  );
};
