import { Input } from "@/components/ui/input";

type GeneralFormTextFieldProps = {
  name: string;
  type: string;
  title?: string;
  register: any;
};

export const GeneralFormTextField: React.FC<GeneralFormTextFieldProps> = ({
  name,
  type,
  title,
  register,
}) => {
  return (
    <div key={name}>
      <Input
        name={name}
        type={type}
        placeholder={title ? title : name}
        {...register(name)}
      />
    </div>
  );
};
