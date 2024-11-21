import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

export interface InputWithLabelProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

// InputWithLabelをforwardRefでラップ
export const InputWithLabel = React.forwardRef<
  HTMLInputElement,
  InputWithLabelProps
>(({ label, ...props }, ref) => {
  return (
    <div className="grid w-full items-center gap-1.5">
      <Label>{label}</Label>
      <Input ref={ref} {...props} /> {/* refをInputに渡す */}
    </div>
  );
});
InputWithLabel.displayName = "InputWithLabel"; // デバッグ用の表示名を設定
