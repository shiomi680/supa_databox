import { Input } from "@/components/ui/input";

type GeneralFormTextFieldProps = {
  name: string;
  type: string;
  title?: string;
};

export const GeneralFormTextField: React.FC<GeneralFormTextFieldProps> = ({
  name,
  type,
  title,
}) => {
  return (
    <div key={name}>
      <Input name={name} type={type} placeholder={title ? title : name} />
    </div>
  );
};
