import { RouterProvider } from "react-router";
import { router } from "./router/routes";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import Toast from "@/shared/ui/toast/Toast";

export const Provider = () => {
  return (
    <FluentProvider theme={webLightTheme}>
      <Toast>
        <RouterProvider router={router} />
      </Toast>
    </FluentProvider>
  );
};
