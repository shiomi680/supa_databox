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
  const { register, handleSubmit } = useForm({ defaultValues });
  return (
    <AddToast>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: "20px" }}>
          {/* <RevisionSelector
            revisions={revisions}
            onRevisionChange={handleRevisionChange}
            initialSelectId={revisionId}
          /> */}
        </div>
        <GeneralForm fieldParams={fieldParams} register={register} />
        {/*
        <div style={{ marginTop: "20px" }}>
          <TagsField name="tags" tagOptions={tagOptions} />
        </div>
        <div style={{ marginTop: "20px" }}>
          <FileUploadTableComponent initialFiles={uploadedFiles} onChange={setUploadedFiles} /> 
          <FileControlComponent name="Files" />
          </div>
        */}
        <div
          style={{ marginTop: "20px", display: "flex", alignItems: "center" }}
        >
          {/* <ControlledTextField label={"Update message"} name="commitComment" /> */}
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </AddToast>
  );
};
