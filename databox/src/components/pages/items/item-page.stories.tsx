import { StoryObj, Meta } from "@storybook/react";
import { ItemPage } from "./item-page";
import { ItemFormValues } from "./item-content/item-content";
import { Revision } from "@/lib/crud/revision";
import { useForm, FormProvider } from "react-hook-form";

const meta: Meta<typeof ItemPage> = {
  component: ItemPage,
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const methods = useForm<ItemFormValues>(); // Initialize the form
    return (
      <FormProvider {...methods}>
        <ItemPage
          {...args}
          itemContentProps={{
            revisions: [],
            revision: undefined,
            register: methods.register,
            control: methods.control,
            onSubmit: (data) => console.log(data), // Define onSubmit
            onChangeRevision: (revision: Revision) => console.log(revision), // Define onChangeRevision
          }}
        />
      </FormProvider>
    );
  },
  args: {
    itemMenuProps: {
      items: [
        {
          ItemId: "1",
          RevisionId: "1",
          NewestRevisionId: "1",
          ModelNumber: "1",
          ItemName: "1",
          ItemDescription: "1",
          Cost: 1,
          SalePrice: 1,
          Files: [],
          Tags: [],
        },
      ],
    },
  },
};
