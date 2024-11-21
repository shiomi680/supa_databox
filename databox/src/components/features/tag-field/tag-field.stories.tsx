import { TagsField } from "./tag-field";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TagsField> = {
  component: TagsField,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
