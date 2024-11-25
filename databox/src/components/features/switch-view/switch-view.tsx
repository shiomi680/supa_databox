import React from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export type SwitchViewProps = {
  title?: string;
  isSwitchOn: boolean;
  handleSwitchChange: () => void;
};

export const LabelSwitch = ({
  title,
  isSwitchOn,
  handleSwitchChange,
}: SwitchViewProps) => {
  return (
    <div className="flex items-center space-x-2">
      <Switch checked={isSwitchOn} onCheckedChange={handleSwitchChange} />
      <Label>{title}</Label>
    </div>
  );
};

export const SwitchContentOn = ({
  isSwitchOn,
  children,
}: {
  isSwitchOn: boolean;
  children: React.ReactNode;
}) => {
  return isSwitchOn ? <>{children}</> : null;
};

export const SwitchContentOff = ({
  isSwitchOn,
  children,
}: {
  isSwitchOn: boolean;
  children: React.ReactNode;
}) => {
  return isSwitchOn ? null : <>{children}</>;
};
