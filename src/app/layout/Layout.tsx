import { Outlet } from "react-router";
import { Sidebar } from "../../shared/ui/sidebar/Sidebar";
import Header from "@/shared/ui/header/Header";

export const Layout = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100vh",
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
