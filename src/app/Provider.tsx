import { RouterProvider } from "react-router"
import { router } from "./router/routes"


export const Provider = () => {
    return <RouterProvider router={router}/>
}