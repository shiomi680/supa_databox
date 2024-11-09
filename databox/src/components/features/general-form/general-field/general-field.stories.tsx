import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { useForm } from "react-hook-form";
import { GeneralField, FieldType, FieldParam } from "./general-field";

const meta: Meta<typeof GeneralField> = {
  title: "features/forms/GeneralField",
  component: GeneralField,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const { register } = useForm();
    const fieldParam: FieldParam = {
      name: "exampleField",
      type: FieldType.text,
      gridSize: 6,
      title: "Example Field",
    };

    return (
      <GeneralField {...args} fieldParam={fieldParam} register={register} />
    );
  },
};

export const SelectField: Story = {
  render: (args) => {
    const { register } = useForm();
    const fieldParam: FieldParam = {
      name: "selectField",
      type: FieldType.select,
      gridSize: 6,
      title: "Select Field",
      choices: ["Option 1", "Option 2", "Option 3"],
    };

    return (
      <GeneralField {...args} fieldParam={fieldParam} register={register} />
    );
  },
};

export const MultiLineTextField: Story = {
  render: (args) => {
    const { register } = useForm();
    const fieldParam: FieldParam = {
      name: "multiLineField",
      type: FieldType.text,
      gridSize: 6,
      title: "Multi-line Field",
      rows: 4,
    };

    return (
      <GeneralField {...args} fieldParam={fieldParam} register={register} />
    );
  },
};
