import type { ReactNode } from "react";


interface Props{
    children: ReactNode 
}

export const PrivateRoutes = ({children} : Props) =>{
    return children;
}