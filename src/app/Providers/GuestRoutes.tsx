import type { ReactNode } from "react";
import { getAccessToken } from "@/shared/utils/getToken";
import { useNavigate } from "react-router";


interface Props{
    children: ReactNode 
}

export const GuestRoutes = ({children} : Props) =>{
    const token = getAccessToken();
    const navigate = useNavigate();
    
    if(token) navigate("/");
    return children;
}