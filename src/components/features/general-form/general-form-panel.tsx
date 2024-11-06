import {
  GeneralField,
  FieldParam,
  FieldType,
} from "./general-field/general-field";

type GeneralFormProps = {
  fieldParams: FieldParam[];
};
export type { FieldParam };
export { FieldType };

export const GeneralForm: React.FC<GeneralFormProps> = ({ fieldParams }) => {
  return (
    //12カラムのグリッドを作成
    <div className="grid grid-cols-12 gap-4">
      {fieldParams.map((field: FieldParam) => (
        //field.gridSizeに応じたカラムを作成
        <div className={`col-span-${field.gridSize}`} key={field.name}>
          <GeneralField fieldParam={field} />
        </div>
      ))}
    </div>
  );
};
