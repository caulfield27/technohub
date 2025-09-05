import type { ReactNode } from "react";


interface Props{
    children: ReactNode 
}

export const GuestRoutes = ({children} : Props) =>{
    return children;
}