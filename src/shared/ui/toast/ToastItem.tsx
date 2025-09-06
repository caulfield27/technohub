import {
  Link,
  Toast,
  ToastTitle,
  ToastTrigger,
} from "@fluentui/react-components";

interface IToastItem {
  title: string;
  action?: () => void;
  actionTitle?: string;
}

const ToastItem = ({ title, action, actionTitle }: IToastItem) => {
  return (
    <Toast>
      <ToastTitle
        action={
          action && (
            <ToastTrigger>
              <Link onClick={action}>{actionTitle || "ок"}</Link>
            </ToastTrigger>
          )
        }
      >
        {title}
      </ToastTitle>
    </Toast>
  );
};

export default ToastItem;
