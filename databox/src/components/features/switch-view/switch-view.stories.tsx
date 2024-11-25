import { SwitchContentOn, SwitchContentOff, LabelSwitch } from "./switch-view";
import { StoryObj, Meta } from "@storybook/react";
import { useSwitchView } from "./use-switch-view";

const meta: Meta<typeof LabelSwitch> = {
  component: LabelSwitch,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const { isSwitchOn, handleSwitchChange } = useSwitchView();
    return (
      <div className="p-6">
        <LabelSwitch
          title="edit"
          isSwitchOn={isSwitchOn}
          handleSwitchChange={handleSwitchChange}
        />
        <SwitchContentOn isSwitchOn={isSwitchOn}>
          <div>Hello</div>
        </SwitchContentOn>
        <SwitchContentOff isSwitchOn={isSwitchOn}>
          <div>Goodbye</div>
        </SwitchContentOff>
      </div>
    );
  },
};
