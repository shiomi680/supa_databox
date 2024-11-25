import { StoryObj, Meta } from "@storybook/react";
import { SwitchForm } from "./switch-form";
import { useForm, FormProvider, useWatch } from "react-hook-form";
import { FieldParam } from "@/components/features/general-form/general-form";
import { FieldType } from "@/components/features/general-form/general-form";
const meta: Meta<typeof SwitchForm> = {
  component: SwitchForm,
};
export default meta;

type Story = StoryObj<typeof meta>;

const formParams = [
  {
    name: "Code",
    title: "Code",
    type: FieldType.text,
    gridSize: 12,
  },
] as FieldParam[];

type ValueType = {
  Code: string;
};

export const Default: Story = {
  render: (args) => {
    const methods = useForm<ValueType>({
      defaultValues: {
        Code: "1234",
      },
    }); // Initialize the form
    const formValues = useWatch({ control: methods.control });

    return (
      <FormProvider {...methods}>
        <SwitchForm
          title="info"
          register={methods.register}
          control={methods.control}
          fieldParams={formParams}
        >
          <div>
            <h3>{formValues.Code}</h3>
          </div>
        </SwitchForm>
      </FormProvider>
    );
  },
};
