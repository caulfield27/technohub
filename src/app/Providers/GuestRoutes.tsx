import type { ReactNode } from "react";
import { getAccessToken } from "../../shared/utils/getToken";
import { Navigate } from "react-router";


interface Props {
    children: ReactNode
}

export const GuestRoutes = ({ children }: Props) => {
    const token = getAccessToken();
    if (token) {
        return <Navigate to="/" replace />
    };

    return children;
}