import type { ReactNode } from "react";
import { getToken } from "../../shared/utils/getToken";
import { useNavigate } from "react-router";


interface Props{
    children: ReactNode 
}

export const PrivateRoutes = ({children} : Props) =>{
    const token = getToken();
    const navigate = useNavigate();

    if(!token) navigate("/login");

    return children;
}