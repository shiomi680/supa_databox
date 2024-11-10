import {
  GeneralField,
  FieldParam,
  FieldType,
} from "./general-field/general-field";

type GeneralFormProps = {
  fieldParams: FieldParam[];
  register: any;
  control: any;
};
export type { FieldParam };
export { FieldType };

export const GeneralForm: React.FC<GeneralFormProps> = ({
  fieldParams,
  register,
  control,
}) => {
  return (
    //12カラムのグリッドを作成
    <div className="grid grid-cols-12 gap-4">
      {fieldParams.map((field: FieldParam) => (
        //field.gridSizeに応じたカラムを作成
        <_GridField gridSize={field.gridSize} key={field.name}>
          <GeneralField
            fieldParam={field}
            register={register}
            control={control}
          />
        </_GridField>
      ))}
    </div>
  );
};

//tailwindに使い得る名前を明示的に示す必要がある。
//`col-span-${field.gridSize}`ではだめだった
const colSpanClasses: Record<number, string> = {
  1: "col-span-1",
  2: "col-span-2",
  3: "col-span-3",
  4: "col-span-4",
  5: "col-span-5",
  6: "col-span-6",
  7: "col-span-7",
  8: "col-span-8",
  9: "col-span-9",
  10: "col-span-10",
  11: "col-span-11",
  12: "col-span-12",
};

const _GridField = ({
  gridSize,
  key,
  children,
}: {
  gridSize: number;
  key: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={colSpanClasses[gridSize]} key={key}>
      {children}
    </div>
  );
};
