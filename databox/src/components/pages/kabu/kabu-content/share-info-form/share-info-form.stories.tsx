import { StoryObj, Meta } from "@storybook/react";
import { ShareInfoForm } from "./share-info-form";
import { useForm, FormProvider } from "react-hook-form";
import { KabuFormValues } from "../kabu-content";

const meta: Meta<typeof ShareInfoForm> = {
  component: ShareInfoForm,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const methods = useForm<KabuFormValues>({
      defaultValues: {
        Code: "1234",
        Name: "test",
        EnglishName: "test",
        Info: {
          Code: "1234",
          Name: "test",
          EnglishName: "test",
          Sector33Code: "1234",
          Sector17Code: "1234",
          MarketCode: "1234",
        },
      },
    }); // Initialize the form
    return (
      <FormProvider {...methods}>
        <ShareInfoForm register={methods.register} control={methods.control} />
      </FormProvider>
    );
  },
  args: {},
};
