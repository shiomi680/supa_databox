import { KabuMenu } from "./kabu-menu";
import type { Meta, StoryObj } from "@storybook/react";
const meta: Meta<typeof KabuMenu> = {
  component: KabuMenu,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    shares: [
      {
        Id: "1",
        Code: "1234567890",
        Name: "Item 1",
        EnglishName: "Item 1",
        Sector33Code: "1234567890",
        Sector33Name: "Item 1",
        Sector17Code: "1234567890",
        Sector17Name: "Item 1",
        MarketCode: "1234567890",
        MarketName: "Item 1",
      },
      {
        Id: "2",
        Code: "1234567890",
        Name: "Item 2",
        EnglishName: "Item 2",
        Sector33Code: "1234567890",
        Sector33Name: "Item 2",
        Sector17Code: "1234567890",
        Sector17Name: "Item 2",
        MarketCode: "1234567890",
        MarketName: "Item 2",
      },
    ],
  },
};
