import { Outlet } from "react-router"
import { Sidebar } from "../../shared/ui/sidebar/Sidebar"

export const Layout = () => {
    return <div style={{
        display: "flex",
        flexDirection: "row",
    }}>
        <Sidebar/>
        <main style={{
            padding: "50px"
        }}>
            <Outlet/>
        </main>
    </div>
}