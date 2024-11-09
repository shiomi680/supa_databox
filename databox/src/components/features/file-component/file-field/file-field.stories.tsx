import { FileField } from "./file-field";
import { StoryObj, Meta } from "@storybook/react";

const meta: Meta<typeof FileField> = {
  component: FileField,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <FileField {...args} />,
  args: {
    file: {
      Id: "1",
      FileName: "test.pdf",
      Url: "https://example.com/test.pdf",
      Visible: true,
    },
  },
};
