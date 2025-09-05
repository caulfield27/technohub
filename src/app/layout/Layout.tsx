import { Outlet } from "react-router"
import { Sidebar } from "../../shared/ui/sidebar/Sidebar"

export const Layout = () => {

    return <div style={{
        display: "flex",
        flexDirection: "row",
    }}>
        <Sidebar/>
        <main style={{
            padding: "32px 32px 32px 50px",
            flexGrow: 1,
            marginLeft: "var(--sidebar-width)"
        }}>
            <Outlet/>
        </main>
    </div>
}