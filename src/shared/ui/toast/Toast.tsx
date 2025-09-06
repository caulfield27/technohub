import { Toaster, useId, useToastController } from "@fluentui/react-components";
import ToastItem from "./ToastItem";
import { useEffect, useState } from "react";

interface IToastProps {
  children: React.ReactNode;
}

const Toast = ({ children }: IToastProps) => {
  const toastId = useId("toaster");
  const { dispatchToast } = useToastController(toastId);
  const [show, setShow] = useState(false);

  const showToast = () => {
    dispatchToast(<ToastItem title="This is a toast message" />, {});
  };

  useEffect(() => {
    if (show) {
      showToast();
      setShow(false);
    }
  }, [show]);

  return (
    <>
      <Toaster id={toastId} />
      {children}
    </>
  );
};

export default Toast;
