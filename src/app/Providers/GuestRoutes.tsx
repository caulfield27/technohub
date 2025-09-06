import type { ReactNode } from "react";
import { getToken } from "../../shared/utils/getToken";
import { useNavigate } from "react-router";


interface Props{
    children: ReactNode 
}

export const GuestRoutes = ({children} : Props) =>{
    const token = getToken();
    const navigate = useNavigate();
    
    if(token) navigate("/");
    return children;
}