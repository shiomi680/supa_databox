import { FilePanel } from "./file-panel";
import { StoryObj, Meta } from "@storybook/react";

const meta: Meta<typeof FilePanel> = {
  component: FilePanel,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <FilePanel {...args} />,
  args: {
    files: [
      {
        Id: "1",
        Name: "test.pdf",
        Path: "https://example.com/test.pdf",
        Bucket: "item-files",
        CreatedAt: new Date(),
      },
      {
        Id: "2",
        Name: "test2.pdf",
        Path: "https://example.com/test2.pdf",
        Bucket: "item-files",
        CreatedAt: new Date(),
      },
    ],
  },
};

export const EmptyFiles: Story = {
  render: (args) => <FilePanel {...args} />,
  args: {
    files: [],
  },
};
