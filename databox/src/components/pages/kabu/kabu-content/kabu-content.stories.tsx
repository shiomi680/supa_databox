import { StoryObj, Meta } from "@storybook/react";
import { KabuContent, KabuFormValues } from "./kabu-content";
import { useForm, FormProvider } from "react-hook-form";

const meta: Meta<typeof KabuContent> = {
  component: KabuContent,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const methods = useForm<KabuFormValues>(); // Initialize the form
    return (
      <FormProvider {...methods}>
        <KabuContent
          register={methods.register}
          control={methods.control}
          onSubmit={(data) => console.log(data)} // Define onSubmit
        />
      </FormProvider>
    );
  },
  args: {},
};
