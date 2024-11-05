import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export enum FieldType {
  date = "date",
  number = "number",
  text = "text",
  select = "select",
}

export type FieldParam = {
  name: string;
  type: string;
  gridSize: number;
  title?: string;
  choices?: string[];
  rows?: number;
};

export type GridTextFieldParams = {
  fieldParam: FieldParam;
};

export const GridTextField: React.FC<GridTextFieldParams> = ({
  fieldParam,
}) => {
  const gridClass = `flex-1 basis-${fieldParam.gridSize}/12`;

  if (fieldParam.type === "select") {
    //選択肢のあるテキストフィールド
    return (
      <div className={gridClass} key={fieldParam.name}>
        <Select>
          <SelectTrigger>
            {fieldParam.title ? fieldParam.title : fieldParam.name}
          </SelectTrigger>
          <SelectContent>
            {fieldParam.choices?.map((choice) => (
              <SelectItem key={choice} value={choice}>
                {choice}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    );
  } else if (fieldParam.rows && fieldParam.rows > 1) {
    //複数行のテキストフィールド
    return (
      <div className={gridClass} key={fieldParam.name}>
        <Textarea
          name={fieldParam.name}
          placeholder={fieldParam.title ? fieldParam.title : fieldParam.name}
          rows={fieldParam.rows}
        />
      </div>
    );
  } else {
    //1行のテキストフィールド
    return (
      <div className={gridClass} key={fieldParam.name}>
        <Input
          name={fieldParam.name}
          type={fieldParam.type}
          placeholder={fieldParam.title ? fieldParam.title : fieldParam.name}
        />
      </div>
    );
  }
};
