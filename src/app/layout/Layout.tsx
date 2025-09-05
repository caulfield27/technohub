import { Outlet } from "react-router"
import { Sidebar } from "../../shared/ui/sidebar/Sidebar"

export const Layout = () => {
    return <div>
        <Sidebar/>
        <Outlet/>
    </div>
}