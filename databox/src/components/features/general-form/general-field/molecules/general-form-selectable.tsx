import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

type GeneralFormSelectableProps = {
  name: string;
  title?: string;
  choices: string[];
  register: any;
};

export const GeneralFormSelectable: React.FC<GeneralFormSelectableProps> = ({
  name,
  title,
  choices,
  register,
}) => {
  return (
    <div key={name}>
      <Select {...register(name)}>
        <SelectTrigger>{title ? title : name}</SelectTrigger>
        <SelectContent>
          {choices?.map((choice) => (
            <SelectItem key={choice} value={choice}>
              {choice}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
