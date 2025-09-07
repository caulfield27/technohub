import { RouterProvider } from "react-router";
import { router } from "./router/routes";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import Toast from "@/shared/ui/toast/Toast";

const myTheme = {
  ...webLightTheme,
  colorBrandBackground: "var(--primery-green-color)",
  colorBrandBackgroundHover: "var(--primery-green-color-hover)",
  colorNeutralStrokeAccessiblePressed: "var(--primery-green-color)",
  colorNeutralStrokeAccessible: "var(--primery-green-color)",
  colorBrandBackgroundPressed: "var(--primery-green-color)",
  colorNeutralForeground2BrandSelectedLight: "var(--primery-green-color)",
  colorBrandBackgroundSelected: "var(--primery-green-color)",
  colorNeutralStrokeAccessibleSelected: "var(--primery-green-color)",
  colorBrandForeground1: "white",
};

export const Provider = () => {
  return (
    <FluentProvider theme={myTheme}>
      <Toast>
        <RouterProvider router={router} />
      </Toast>
    </FluentProvider>
  );
};
