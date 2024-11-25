import { StoryObj, Meta } from "@storybook/react";
import { InfoItem } from "./info-item";

const meta: Meta<typeof InfoItem> = {
  component: InfoItem,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <div>
        <InfoItem title="test" value="test" />
        <InfoItem title="aaaaaaa" value="test" />
      </div>
    );
  },
  args: {},
};
