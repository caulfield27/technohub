import { Outlet } from "react-router"
import { Sidebar } from "../../shared/ui/sidebar/Sidebar"

export const Layout = () => {
    return <div style={{
        display: "flex"
    }}>
        <Sidebar />
        <Outlet />
    </div>
}