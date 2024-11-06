import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toastConfig = {
  autoClose: 3000,
  hideProgressBar: false,
  newestOnTop: true,
  closeOnClick: true,
  rtl: false,
  pauseOnFocusLoss: true,
  draggable: true,
  pauseOnHover: true,
};

export const AddToast = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <ToastContainer position="top-right" {...toastConfig} />
      {children}
    </div>
  );
};

export { toast };
