import type { INavLinks } from "../types/types";
import {
  Poll20Regular,
  People20Regular,
  TableSimple20Regular,
  TaskListSquareLtr20Regular,
  Cart20Regular,
  Grid20Regular,
  Box20Regular,
} from "@fluentui/react-icons";
import type { User } from "../types/user";

export const usePermittedLinks = (user: User | null): INavLinks[] => {
  switch (user?.Role.Code) {
    case "client":
      return [
        {
          label: "Продукты",
          icon: <Grid20Regular />,
          path: "/products",
        },
        {
          label: "Мои заказы",
          icon: <Cart20Regular />,
          path: "/ordersStatus",
        },
      ];
    case "supervisor":
      return [
        {
          label: "Продукты",
          icon: <Grid20Regular />,
          path: "/products",
        },
        {
          label: "Заказы",
          icon: <TaskListSquareLtr20Regular />,
          path: "/orders",
        },
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
          label: "Партии",
          icon: <Box20Regular />,
          path: "/party",
        },
      ];
    case "operator":
      return [
        {
          label: "Продукты",
          icon: <Grid20Regular />,
          path: "/products",
        },
        {
          label: "Статистика",
          icon: <Poll20Regular />,
          path: "/statistics",
        },
        {
          label: "Партии",
          icon: <Box20Regular />,
          path: "/party",
        },
      ];
    default:
      return [];
  }
};
