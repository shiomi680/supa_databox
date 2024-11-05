import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { GridTextField, FieldType, FieldParam } from "./grid_text_field";

const meta: Meta<typeof GridTextField> = {
  title: "features/forms/GridTextField",
  component: GridTextField,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const fieldParam: FieldParam = {
      name: "exampleField",
      type: FieldType.text,
      gridSize: 6,
      title: "Example Field",
    };

    return <GridTextField {...args} fieldParam={fieldParam} />;
  },
};

export const SelectField: Story = {
  render: (args) => {
    const fieldParam: FieldParam = {
      name: "selectField",
      type: FieldType.select,
      gridSize: 6,
      title: "Select Field",
      choices: ["Option 1", "Option 2", "Option 3"],
    };

    return <GridTextField {...args} fieldParam={fieldParam} />;
  },
};

export const MultiLineTextField: Story = {
  render: (args) => {
    const fieldParam: FieldParam = {
      name: "multiLineField",
      type: FieldType.text,
      gridSize: 6,
      title: "Multi-line Field",
      rows: 4,
    };

    return <GridTextField {...args} fieldParam={fieldParam} />;
  },
};
