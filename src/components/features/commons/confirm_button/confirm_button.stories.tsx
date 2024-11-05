import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import ConfirmButton from "./confirm_button";
const meta: Meta<typeof ConfirmButton> = {
  title: "ConfirmButton",
  component: ConfirmButton,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const handleConfirm = async () => {
      console.log("Confirmed!");
    };

    return (
      <ConfirmButton
        {...args}
        onConfirm={handleConfirm}
        title="Confirm Action"
        description="Are you sure you want to proceed?"
      >
        Click Me
      </ConfirmButton>
    );
  },
};
