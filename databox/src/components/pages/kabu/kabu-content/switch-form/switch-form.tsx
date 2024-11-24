import React from "react";
import { GeneralForm } from "@/components/features/general-form/general-form";
import {
  SwitchView,
  SwitchContentOn,
  SwitchContentOff,
} from "@/components/features/switch-view/switch-view";
import {
  FieldParam,
  FieldType,
} from "@/components/features/general-form/general-field/general-field";
import { useSwitchView } from "@/components/features/switch-view/use-switch-view";

type SwitchFormProps = {
  register: any;
  control: any;
  fieldParams: FieldParam[];
  children: React.ReactNode;
};

export const SwitchForm = ({
  register,
  control,
  fieldParams,
  children,
}: SwitchFormProps) => {
  const { isSwitchOn, handleSwitchChange } = useSwitchView();

  return (
    <SwitchView
      title="edit"
      isSwitchOn={isSwitchOn}
      handleSwitchChange={handleSwitchChange}
    >
      <SwitchContentOn isSwitchOn={isSwitchOn}>
        <GeneralForm
          fieldParams={fieldParams}
          register={register}
          control={control}
        />
      </SwitchContentOn>
      <SwitchContentOff isSwitchOn={isSwitchOn}>{children}</SwitchContentOff>
    </SwitchView>
  );
};
