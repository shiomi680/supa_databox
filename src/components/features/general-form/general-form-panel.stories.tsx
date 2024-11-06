import { Meta } from "@storybook/react";
import { GeneralForm, FieldType } from "./general-form-panel";
import type { StoryObj } from "@storybook/react";

const meta: Meta<typeof GeneralForm> = {
  title: "features/general-form/GeneralForm",
  component: GeneralForm,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return <GeneralForm {...args} />;
  },
  args: {
    fieldParams: [
      {
        name: "exampleField",
        type: FieldType.text,
        gridSize: 6,
        title: "Example Field",
      },
      {
        name: "selectField",
        type: FieldType.select,
        gridSize: 6,
        title: "Select Field",
        choices: ["Option 1", "Option 2", "Option 3"],
      },
      {
        name: "multiLineField",
        type: FieldType.text,
        gridSize: 12,
        title: "Multi-line Field",
        rows: 4,
      },
      {
        name: "selectField2",
        type: FieldType.select,
        gridSize: 12,
        title: "Select Field",
        choices: ["Option 1", "Option 2", "Option 3"],
      },
    ],
  },
};
