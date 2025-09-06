import type { IRole } from "../types/role";

export const roles: IRole[] = [{ name: "operator" }, { name: "client" }];

export const permittedRoutes: { [key: string]: string[] } = {
  client: ["/products", "/ordersStatus"],
  supervisor: [
    "/products",
    "/orders",
    "/statistics",
    "/users",
    "/storages",
    "/party",
  ],
  operator: ["/products", "/statistics"],
};
