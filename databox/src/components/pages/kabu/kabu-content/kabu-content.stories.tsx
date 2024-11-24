import { ItemContent } from "./kabu-content";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ItemContent> = {
  component: ItemContent,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <ItemContent {...args} />,
};
