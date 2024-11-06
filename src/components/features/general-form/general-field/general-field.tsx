import { GeneralFormSelectable } from "./molecules/general-form-selectable";
import { GeneralFormTextField } from "./molecules/general-form-text-field";
import { GeneralFormMultilineField } from "./molecules/general-form-multiline-field";

export enum FieldType {
  date = "date",
  number = "number",
  text = "text",
  select = "select",
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
};

export const GeneralField: React.FC<GeneralFieldProps> = ({ fieldParam }) => {
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
      />
    );
  } else if (fieldParam.type === FieldType.select) {
    return (
      <GeneralFormSelectable
        name={fieldParam.name}
        title={fieldParam.title}
        choices={fieldParam.choices ?? []}
      />
    );
  } else {
    return (
      <GeneralFormTextField
        name={fieldParam.name}
        title={fieldParam.title}
        type={fieldParam.type}
      />
    );
  }
};
