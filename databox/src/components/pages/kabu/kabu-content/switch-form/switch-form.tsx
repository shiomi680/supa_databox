import React from "react";
import { GeneralForm } from "@/components/features/general-form/general-form";
import {
  LabelSwitch,
  SwitchContentOn,
  SwitchContentOff,
} from "@/components/features/switch-view/switch-view";
import {
  FieldParam,
  FieldType,
} from "@/components/features/general-form/general-field/general-field";
import { useSwitchView } from "@/components/features/switch-view/use-switch-view";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

type SwitchFormProps = {
  register: any;
  control: any;
  fieldParams: FieldParam[];
  children: React.ReactNode;
  title?: string;
};

export const SwitchForm = ({
  register,
  control,
  fieldParams,
  children,
  title,
}: SwitchFormProps) => {
  const { isSwitchOn, handleSwitchChange } = useSwitchView();

  return (
    <Card className="p-6">
      <CardHeader>
        <div className="flex items-center">
          {title && <CardTitle className="mr-10">{title}</CardTitle>}
          <LabelSwitch
            title="edit"
            isSwitchOn={isSwitchOn}
            handleSwitchChange={handleSwitchChange}
          />
        </div>
      </CardHeader>
      <CardContent>
        <SwitchContentOn isSwitchOn={isSwitchOn}>
          <GeneralForm
            fieldParams={fieldParams}
            register={register}
            control={control}
          />
        </SwitchContentOn>
        <SwitchContentOff isSwitchOn={isSwitchOn}>{children}</SwitchContentOff>
      </CardContent>
    </Card>
  );
};
