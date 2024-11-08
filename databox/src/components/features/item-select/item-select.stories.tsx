import React from "react";
import { ItemSelectorPanel } from "./item-select";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ItemSelectorPanel> = {
  component: ItemSelectorPanel,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return <ItemSelectorPanel {...args} />;
  },
  args: {
    modeLink: true,
    items: [
      { id: 1, name: "Item 1", categoryId: 1 },
      { id: 2, name: "Item 2", categoryId: 1 },
      { id: 3, name: "Item 3", categoryId: 2 },
    ],
    idName: "id",
    gridColumnsDef: [
      {
        field: "name",
        headerName: "Item Name",
        link: (item) => `/items/${item.id}`,
      },
      {
        field: "categoryId",
        headerName: "Category ID",
      },
    ],
    onSelect: (itemId) => {
      console.log("Selected item ID:", itemId);
    },
  },
};
