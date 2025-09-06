import {
  Poll20Regular,
  People20Regular,
  TableSimple20Regular,
  TaskListSquareLtr20Regular,
  Grid20Regular,
} from "@fluentui/react-icons";
import type { ReactElement } from "react";

export interface INavLinks {
  label: string;
  icon: ReactElement;
  path: string;
}

export const navLinks: INavLinks[] = [
  {
    label: "Статистика",
    icon: <Poll20Regular />,
    path: "/statistics",
  },
  {
    label: "Пользователи",
    icon: <People20Regular />,
    path: "/users",
  },
  {
    label: "Склады",
    icon: <TableSimple20Regular />,
    path: "/storages",
  },
  {
    label: "Заказы",
    icon: <TaskListSquareLtr20Regular />,
    path: "/orders",
  },
  {
    label: "Продукты",
    icon: <Grid20Regular />,
    path: "/products",
  },
  {
    label: "Партии",
    icon: <Grid20Regular />,
    path: "/party",
  },
];
