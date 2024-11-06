import { ConfirmButton } from "../confirm-button/confirm-button";

interface DeleteButtonProps {
  onConfirm: () => void;
}

export const DeleteButton: React.FC<DeleteButtonProps> = ({ onConfirm }) => {
  return (
    <ConfirmButton
      variant="destructive"
      onConfirm={onConfirm}
      title="Confirm Delete"
      description="Are you sure you want to delete this item?"
    >
      DELETE
    </ConfirmButton>
  );
};
