import { Outlet } from "react-router";
import { Sidebar } from "../../shared/ui/sidebar/Sidebar";
import Header from "@/shared/ui/header/Header";
import { useEffect } from "react"
import { getMe } from "../../shared/api/api.helpers"

export const Layout = () => {
  useEffect(() => {
        getMe();
    }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Sidebar />
      <main
        style={{
          padding: "0 32px 0 32px",
          flexGrow: 1,
          marginLeft: "var(--sidebar-width)",
          marginTop: "22px",
        }}
      >
        <Header />
        <Outlet />
      </main>
    </div>
  );
};
