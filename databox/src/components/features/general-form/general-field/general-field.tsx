import { GeneralFormSelectable } from "./molecules/general-form-selectable";
import { GeneralFormTextField } from "./molecules/general-form-text-field";
import { GeneralFormMultilineField } from "./molecules/general-form-multiline-field";
import { FilePanelField } from "./file-component/file-field";
export enum FieldType {
  date = "date",
  number = "number",
  text = "text",
  select = "select",
  files = "files",
}

export type FieldParam = {
  name: string;
  type: FieldType;
  gridSize: number;
  title?: string;
  choices?: string[];
  rows?: number;
};

type GeneralFieldProps = {
  fieldParam: FieldParam;
  register: any;
  control: any;
};

export const GeneralField: React.FC<GeneralFieldProps> = ({
  fieldParam,
  register,
  control,
}) => {
  if (
    fieldParam.type === FieldType.text &&
    fieldParam.rows &&
    fieldParam.rows > 1
  ) {
    return (
      <GeneralFormMultilineField
        name={fieldParam.name}
        title={fieldParam.title}
        rows={fieldParam.rows}
        register={register}
      />
    );
  } else if (fieldParam.type === FieldType.select) {
    return (
      <GeneralFormSelectable
        name={fieldParam.name}
        title={fieldParam.title}
        choices={fieldParam.choices ?? []}
        register={register}
      />
    );
  } else if (fieldParam.type === FieldType.files) {
    return <FilePanelField name={fieldParam.name} control={control} />;
  } else {
    return (
      <GeneralFormTextField
        name={fieldParam.name}
        title={fieldParam.title}
        type={fieldParam.type}
        register={register}
      />
    );
  }
};
