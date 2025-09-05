import { RouterProvider } from "react-router"
import { router } from "./router/routes"
import { FluentProvider, webDarkTheme, webLightTheme } from "@fluentui/react-components"

export const Provider = () => {
    return <FluentProvider theme={webLightTheme}>
        <RouterProvider router={router} />
    </FluentProvider>
}