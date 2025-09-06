import { Toaster, useId, useToastController } from "@fluentui/react-components";
import ToastItem from "./ToastItem";
import { useEffect, type ReactNode } from "react";
import { useGlobalStore } from "@/shared/store/global.store";

interface IToastProps {
  children: ReactNode;
}

const Toast = ({ children }: IToastProps) => {
  const toastId = useId("toaster");
  const { dispatchToast } = useToastController(toastId);
  const { toast, setToast } = useGlobalStore();
  const { show, options, title, action, actionTitle } = toast;

  const showToast = () => {
    dispatchToast(
      <ToastItem title={title!} action={action} actionTitle={actionTitle} />,
      { toastId, ...options }
    );
  };

  useEffect(() => {
    if (show) {
      showToast();
      setToast({ ...toast, show: false });
    }
  }, [show]);

  return (
    <>
      <Toaster toasterId={toastId} />
      {children}
    </>
  );
};

export default Toast;
