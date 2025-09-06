import type {
  ToastId,
  ToastIntent,
  ToastPoliteness,
  ToastPosition,
} from "@fluentui/react-components";
import type { ReactNode } from "react";

export interface ToastOptions<TData = object> {
  toastId?: ToastId;
  position?: ToastPosition;
  content?: string | ReactNode;
  timeout?: number;
  pauseOnWindowBlur?: boolean;
  pauseOnHover?: boolean;
  priority?: number;
  politeness?: ToastPoliteness;
  intent?: ToastIntent;
  data?: TData;
}
