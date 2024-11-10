import {
  ContentPageLayout,
  ContentRevisionLayout,
  ContentFileLayout,
  ContentSubmitLayout,
} from "./content-page-layout";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ContentPageLayout> = {
  component: ContentPageLayout,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <ContentPageLayout>
        <ContentRevisionLayout>
          <div>Hello</div>
        </ContentRevisionLayout>
        <ContentFileLayout>
          <div>Hello</div>
        </ContentFileLayout>
        <ContentSubmitLayout>
          <div>Hello</div>
        </ContentSubmitLayout>
      </ContentPageLayout>
    );
  },
  args: {},
};
