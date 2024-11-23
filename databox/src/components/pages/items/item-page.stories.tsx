import { StoryObj, Meta } from "@storybook/react";
import { ItemPage } from "./item-page";

const meta: Meta<typeof ItemPage> = {
  component: ItemPage,
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <ItemPage {...args} />,
  args: {
    itemMenuProps: {
      items: [
        {
          ItemId: "1",
          RevisionId: "1",
          NewestRevisionId: "1",
          ModelNumber: "1",
          ItemName: "1",
          ItemDescription: "1",
          Cost: 1,
          SalePrice: 1,
          Files: [],
          Tags: [],
        },
      ],
    },
    itemContentProps: {
      onSubmit: () => {},
      onChangeRevision: () => {},
    },
  },
};
