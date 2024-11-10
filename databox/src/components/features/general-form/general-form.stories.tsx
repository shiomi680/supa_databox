import { Meta } from "@storybook/react";
import { GeneralForm, FieldType } from "./general-form";
import type { StoryObj } from "@storybook/react";
import { useForm } from "react-hook-form";
const meta: Meta<typeof GeneralForm> = {
  component: GeneralForm,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const { register, handleSubmit, control } = useForm();
    const onSubmit = (data: any) => {
      alert(`Form submitted! ${JSON.stringify(data)}`);
    };
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <GeneralForm {...args} register={register} control={control} />
        <button type="submit">Submit</button>
      </form>
    );
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
