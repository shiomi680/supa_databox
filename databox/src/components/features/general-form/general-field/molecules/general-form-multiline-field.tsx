import { Textarea } from "@/components/ui/textarea";

type GeneralFormMultilineFieldProps = {
  name: string;
  title?: string;
  rows: number;
};

export const GeneralFormMultilineField: React.FC<
  GeneralFormMultilineFieldProps
> = ({ name, title, rows }) => {
  return (
    <div key={name}>
      <Textarea name={name} placeholder={title ? title : name} rows={rows} />
    </div>
  );
};
