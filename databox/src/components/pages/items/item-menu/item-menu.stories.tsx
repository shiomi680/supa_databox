import { ItemMenu } from "./item-menu";
import type { Meta, StoryObj } from "@storybook/react";
import { Item } from "@/lib/crud/item";
const meta: Meta<typeof ItemMenu> = {
  component: ItemMenu,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        ItemId: "1",
        RevisionId: "1",
        NewestRevisionId: "1",
        Name: "Item 1",
        ModelNumber: "1234567890",
        ItemName: "Item 1",
        ItemDescription: "Item 1",
        Cost: 100,
        SalePrice: 100,
        Files: [],
        Tags: [],
      } as Item,
      {
        ItemId: "2",
        RevisionId: "2",
        NewestRevisionId: "2",
        Name: "Item 2",
        ModelNumber: "1234567890",
        ItemName: "Item 2",
        ItemDescription: "Item 2",
        Cost: 100,
        SalePrice: 100,
        Files: [],
        Tags: [],
      } as Item,
    ],
  },
};
