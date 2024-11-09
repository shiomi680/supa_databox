import { SidebarComponent } from "./menu-sidebar";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SidebarComponent> = {
  component: SidebarComponent,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <div style={{ display: "flex" }}>
        <SidebarComponent title="My Sidebar" footer="Footer">
          <div>Hello</div>
        </SidebarComponent>
        <div>world</div>
      </div>
    );
  },
  args: {},
};
