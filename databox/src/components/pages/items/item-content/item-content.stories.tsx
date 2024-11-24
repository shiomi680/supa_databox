import { StoryObj, Meta } from "@storybook/react";
import { ItemContent, ItemContentProps, ItemFormValues } from "./item-content";
import { Revision } from "@/lib/crud/revision";
import { UseFormRegister, useForm, FormProvider } from "react-hook-form";

const meta: Meta<typeof ItemContent> = {
  component: ItemContent,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const methods = useForm<ItemFormValues>(); // Initialize the form
    return (
      <FormProvider {...methods}>
        <ItemContent
          {...args}
          register={methods.register}
          control={methods.control}
        />
      </FormProvider>
    );
  },
  args: {
    revision: undefined, // or provide a mock revision object
    revisions: [], // provide an array of mock revisions
    onSubmit: (data) => console.log(data),
    onChangeRevision: (revision: Revision) => console.log(revision),
  },
};
