import { FileRow } from "./file-row";
import { StoryObj, Meta } from "@storybook/react";

const meta: Meta<typeof FileRow> = {
  component: FileRow,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <FileRow {...args} />,
  args: {
    file: {
      Id: "1",
      Name: "test.pdf",
      Path: "test.pdf",
      Bucket: "item-files",
      CreatedAt: new Date(),
      // Visible: true,
    },
  },
};
