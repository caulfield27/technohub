import type { ReactNode } from "react";
import { getAccessToken } from "../../shared/utils/getToken";
import { Navigate, useLocation } from "react-router";
import { useGlobalStore } from "@/shared/store/global.store";
import { permittedRoutes } from "@/shared/data/roles";


interface Props {
    children: ReactNode
}

export const PrivateRoutes = ({ children }: Props) => {
    const token = getAccessToken();
    const user = useGlobalStore((state) => state.user);
    const role = user?.Role?.Code;
    const { pathname } = useLocation();


    if (!token) {
        return <Navigate to="/login" replace />
    };

    if (role && !permittedRoutes[role].includes(pathname)) {
        return <Navigate to="/" replace />
    };

  return children;
};
