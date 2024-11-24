import { SwitchView, SwitchContentOn, SwitchContentOff } from "./switch-view";
import { StoryObj, Meta } from "@storybook/react";
import { useSwitchView } from "./use-switch-view";

const meta: Meta<typeof SwitchView> = {
  component: SwitchView,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const { isSwitchOn, handleSwitchChange } = useSwitchView();
    return (
      <SwitchView
        title="Switch View"
        isSwitchOn={isSwitchOn}
        handleSwitchChange={handleSwitchChange}
      >
        <SwitchContentOn isSwitchOn={isSwitchOn}>
          <div>Hello</div>
        </SwitchContentOn>
        <SwitchContentOff isSwitchOn={isSwitchOn}>
          <div>Goodbye</div>
        </SwitchContentOff>
      </SwitchView>
    );
  },
};
