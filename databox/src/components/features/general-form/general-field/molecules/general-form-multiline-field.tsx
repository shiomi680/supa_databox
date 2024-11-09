import { Textarea } from "@/components/ui/textarea";

type GeneralFormMultilineFieldProps = {
  name: string;
  title?: string;
  rows: number;
  register: any;
};

export const GeneralFormMultilineField: React.FC<
  GeneralFormMultilineFieldProps
> = ({ name, title, rows, register }) => {
  return (
    <div key={name}>
      <Textarea
        {...register(name)}
        placeholder={title ? title : name}
        rows={rows}
      />
    </div>
  );
};
