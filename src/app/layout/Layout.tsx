import { Outlet } from "react-router"
import { Sidebar } from "../../shared/ui/sidebar/Sidebar"
import { useEffect } from "react"
import { getMe } from "../../shared/api/api.helpers"

export const Layout = () => {
    
    useEffect(() => {
        getMe();
    }, []);

    return <div style={{
        display: "flex",
        flexDirection: "row",
    }}>
        <Sidebar />
        <main style={{
            padding: "32px 32px 32px 50px",
            flexGrow: 1,
            marginLeft: "var(--sidebar-width)"
        }}>
            <Outlet />
        </main>
    </div>
}