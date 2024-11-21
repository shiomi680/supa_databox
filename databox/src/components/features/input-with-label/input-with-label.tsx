import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

export interface InputWithLabelProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  type: string;
  register: any;
}

export const InputWithLabel = React.forwardRef<
  HTMLInputElement,
  InputWithLabelProps
>(({ label, name, type, register, ...props }, ref) => {
  return (
    <div className="grid w-full items-center gap-1.5">
      <Label className="text-foreground">{label}</Label>
      <Input ref={ref} type={type} name={name} {...register(name)} {...props} />
    </div>
  );
});
InputWithLabel.displayName = "InputWithLabel";
