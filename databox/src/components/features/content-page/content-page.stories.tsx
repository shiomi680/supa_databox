import { ContentPage, FieldType } from "./content-page";
import type { Meta, StoryObj } from "@storybook/react";
const meta: Meta<typeof ContentPage> = {
  component: ContentPage,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return <ContentPage {...args} />;
  },
  args: {
    itemComponentInfo: [
      { name: "title", title: "Title", type: FieldType.text, gridSize: 12 },
    ],
    onSubmit: (data: any) => {
      alert(`Form submitted! ${JSON.stringify(data)}`);
    },
  },
};
