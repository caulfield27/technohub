import { createBrowserRouter, Navigate } from "react-router";
import { Layout } from "../layout/Layout";
import { GuestRoutes } from "../Providers/GuestRoutes";
import { Login } from "../../pages/login";
import { Suspense } from "react";
import { Statistics } from "../../pages/statistics";
import { PrivateRoutes } from "../Providers/PrivateRoutes";
import { Users } from "../../pages/users";
import { Storage } from "../../pages/storage";
import { Orders } from "../../pages/orders";
import { Products } from "../../pages/products";
import { OrderStatus } from "@/pages/orderStatus";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="products" />,
      },
      {
        path: "statistics",
        element: (
          <PrivateRoutes>
            <Suspense fallback={<h1>loading...</h1>}>
              <Statistics />
            </Suspense>
          </PrivateRoutes>
        ),
      },
      {
        path: "users",
        element: (
          <PrivateRoutes>
            <Suspense fallback={<h1>loading...</h1>}>
              <Users />
            </Suspense>
          </PrivateRoutes>
        ),
      },
      {
        path: "storages",
        element: (
          <PrivateRoutes>
            <Suspense fallback={<h1>loading...</h1>}>
              <Storage />
            </Suspense>
          </PrivateRoutes>
        ),
      },
      {
        path: "orders",
        element: (
          <PrivateRoutes>
            <Suspense fallback={<h1>loading...</h1>}>
              <Orders />
            </Suspense>
          </PrivateRoutes>
        ),
      },
      {
        path: "products",
        element: (
          <PrivateRoutes>
            <Suspense fallback={<h1>loading...</h1>}>
              <Products />
            </Suspense>
          </PrivateRoutes>
        ),
      },
      {
        path: "ordersStatus",
        element: (
          <PrivateRoutes>
            <Suspense fallback={<h1>loading...</h1>}>
              <OrderStatus />
            </Suspense>
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: (
      <GuestRoutes>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Login />
        </Suspense>
      </GuestRoutes>
    ),
  },
]);
