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
    initialFiles: [
      {
        Id: "1",
        FileName: "test.pdf",
        Url: "https://example.com/test.pdf",
        Visible: true,
      },
      {
        Id: "2",
        FileName: "test2.pdf",
        Url: "https://example.com/test2.pdf",
        Visible: true,
      },
    ],
  },
};
