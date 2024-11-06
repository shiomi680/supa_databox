import { DeleteButton } from "./delete-button";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof DeleteButton> = {
  component: DeleteButton,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <DeleteButton {...args} />,
  args: {
    onConfirm: () => {
      console.log("deleted!");
    },
  },
};
