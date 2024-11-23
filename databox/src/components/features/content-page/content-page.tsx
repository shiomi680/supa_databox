import { AddToast } from "@/components/features/add-toast/add-toast";
import { Button } from "@/components/ui/button";
import {
  GeneralForm,
  FieldParam,
  FieldType,
} from "@/components/features/general-form/general-form";
import { useForm } from "react-hook-form";
// import { TagsField } from "@/components/features/tags-field/tags-field";
// import { FileControlComponent } from "@/components/features/file-control/file-control";
// import { ControlledTextField } from "@/components/features/controlled-text-field/controlled-text-field";
import {
  ContentRevisionLayout,
  ContentFileLayout,
  ContentSubmitLayout,
  ContentPageLayout,
} from "@/components/layouts/content-page/content-page-layout";

export type { FieldParam };
export { FieldType };
type ContentPageProps = {
  defaultValues: any;
  fieldParams: FieldParam[];
  onSubmit: (args: any) => void;
};

export const ContentPage = ({
  defaultValues,
  fieldParams,
  onSubmit,
}: ContentPageProps) => {
  const { register, handleSubmit, control } = useForm({ defaultValues });

  return (
    <ContentPageLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <GeneralForm
          register={register}
          control={control}
          fieldParams={fieldParams}
        />
        <ContentFileLayout>
          <></>
          {/* <FileUploadTableComponent initialFiles={uploadedFiles} onChange={setUploadedFiles} /> 
          <FileControlComponent name="Files" /> */}
        </ContentFileLayout>
        <ContentSubmitLayout>
          <Button type="submit">Submit</Button>
        </ContentSubmitLayout>
      </form>
    </ContentPageLayout>
  );
};
