import { FilePanelComponent } from "./file-panel-component";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof FilePanelComponent> = {
  component: FilePanelComponent,
};

export default meta;

type Story = StoryObj<typeof FilePanelComponent>;

export const Default: Story = {
  args: {
    value: [],
    onChange: () => {},
  },
};
