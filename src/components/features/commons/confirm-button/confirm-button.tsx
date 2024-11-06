import React, { useState } from "react";
import { Button, ButtonProps } from "@/components/ui/button";
import { ConfirmDialog } from "./confirm-dialog/confirm-dialog";
interface ConfirmButtonProps extends Omit<ButtonProps, "onClick"> {
  onConfirm: () => void;
  title: string;
  description: string;
}

export const ConfirmButton: React.FC<ConfirmButtonProps> = ({
  onConfirm,
  title,
  description,
  ...buttonProps
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleConfirm = async () => {
    await onConfirm();
    handleClose();
  };
  return (
    <>
      <Button {...buttonProps} onClick={handleOpen}>
        {buttonProps.children}
      </Button>
      <ConfirmDialog
        open={open}
        onClose={handleClose}
        onConfirm={handleConfirm}
        title={title}
        description={description}
      />
    </>
  );
};
