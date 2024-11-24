import { StoryObj, Meta } from "@storybook/react";
import { KabuPage } from "./kabu-page";
import { KabuFormValues } from "./kabu-content/kabu-content";
import { useForm, FormProvider } from "react-hook-form";

const meta: Meta<typeof KabuPage> = {
  component: KabuPage,
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const methods = useForm<KabuFormValues>(); // Initialize the form
    return (
      <FormProvider {...methods}>
        <KabuPage
          {...args}
          kabuContentProps={{
            register: methods.register,
            control: methods.control,
            onSubmit: (data) => console.log(data), // Define onSubmit
          }}
        />
      </FormProvider>
    );
  },
  args: {
    kabuMenuProps: {
      shares: [
        {
          Code: "1",
          Name: "1",
          EnglishName: "1",
          Id: "1",
          Sector33Code: "1",
          Sector33Name: "1",
          Sector17Code: "1",
          Sector17Name: "1",
          MarketCode: "1",
          MarketName: "1",
        },
      ],
    },
  },
};
