import type { Meta, StoryObj } from "@storybook/react";
import { ConfirmDialog } from "./confirm-dialog";
import React, { useState } from "react";

const meta: Meta<typeof ConfirmDialog> = {
  component: ConfirmDialog,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleConfirm = async () => {
      console.log("Confirmed!");
    };

    return (
      <>
        <button onClick={handleOpen}>Open Confirm Dialog</button>
        <ConfirmDialog
          {...args}
          open={open}
          onClose={handleClose}
          onConfirm={handleConfirm}
          title="Confirm Action"
          description="Are you sure you want to proceed?"
        />
      </>
    );
  },
};
