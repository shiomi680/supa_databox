import { ItemPage } from "./item-page";
import { useItemMenu } from "./item-menu/item-menu.hook";
import { useItemContent } from "./item-content/item-content.hook";
type ItemPageContainerProps = {
  revision_id?: string;
};

export const ItemPageContainer = ({ revision_id }: ItemPageContainerProps) => {
  const { props: itemMenuProps } = useItemMenu();
  const { props: itemContentProps } = useItemContent(revision_id);
  return (
    <ItemPage
      itemMenuProps={itemMenuProps}
      itemContentProps={itemContentProps}
    />
  );
};
