import { ItemFilesPanel } from "./file-panel-component";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ItemFilesPanel> = {
  component: ItemFilesPanel,
};

export default meta;

type Story = StoryObj<typeof ItemFilesPanel>;

export const Default: Story = {
  args: {
    value: [],
    onChange: () => {},
  },
};
