import { People16Regular, Poll16Regular } from "@fluentui/react-icons"
import type { ReactElement } from "react"

export interface INavLinks{
    label: string,
    icon: ReactElement,
    path: string
}

export const navLinks = [
    {
        label: "Статистика",
        icon: <Poll16Regular />,
        path: "/statistics"
    },
    {
        label: "Пользователи",
        icon: <People16Regular/>,
        path: "/users"
    }
]