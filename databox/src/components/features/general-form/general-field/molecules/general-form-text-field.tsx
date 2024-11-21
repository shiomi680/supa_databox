import { Input } from "@/components/ui/input";
import { InputWithLabel } from "@/components/features/input-with-label/input-with-label";

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
      <InputWithLabel
        label={title ? title : name}
        name={name}
        type={type}
        placeholder={title ? title : name}
        register={register}
      />
    </div>
  );
};
