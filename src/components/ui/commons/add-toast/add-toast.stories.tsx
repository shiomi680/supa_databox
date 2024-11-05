import type { Meta, StoryObj } from "@storybook/react";
import { AddToast, toast } from "./add-toast";
import React from "react";

const meta: Meta<typeof AddToast> = {
  title: "UI/Commons/AddToast",
  component: AddToast,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const handleClick = () => {
      toast.success("message!");
    };

    return (
      <AddToast {...args}>
        <button onClick={handleClick}>click</button>
      </AddToast>
    );
  },
};
