import { People16Regular, Poll16Regular, TableSimple16Regular, TaskListSquareLtr16Regular, Grid16Regular, AppsRegular } from "@fluentui/react-icons"
import type { ReactElement } from "react"

export interface INavLinks{
    label: string,
    icon: ReactElement,
    path: string
}

export const navLinks: INavLinks[] = [
    {
        label: "Статистика",
        icon: <Poll16Regular />,
        path: "/statistics"
    },
    {
        label: "Пользователи",
        icon: <People16Regular/>,
        path: "/users"
    },
    {
        label: "Склады",
        icon: <TableSimple16Regular/>,
        path: "/storages"
    },
    {
        label: "Заказы",
        icon: <TaskListSquareLtr16Regular/>,
        path: "/orders"
    },
    {
        label: "Продукты",
        icon: <Grid16Regular/>,
        path: "/products"
    },
    {
        label: "Партии",
        icon: <AppsRegular/>,
        path: "/party"
    },
]