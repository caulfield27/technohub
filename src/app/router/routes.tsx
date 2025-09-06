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
import { Party } from "@/pages/Party";
import { OrderStatus } from "@/pages/orderStatus";
import Loading from "@/shared/ui/loading/Loading";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "statistics",
        element: (
          <PrivateRoutes>
            <Suspense fallback={<Loading />}>
              <Statistics />
            </Suspense>
          </PrivateRoutes>
        ),
      },
      {
        path: "users",
        element: (
          <PrivateRoutes>
            <Suspense fallback={<Loading />}>
              <Users />
            </Suspense>
          </PrivateRoutes>
        ),
      },
      {
        path: "storages",
        element: (
          <PrivateRoutes>
            <Suspense fallback={<Loading />}>
              <Storage />
            </Suspense>
          </PrivateRoutes>
        ),
      },
      {
        path: "orders",
        element: (
          <PrivateRoutes>
            <Suspense fallback={<Loading />}>
              <Orders />
            </Suspense>
          </PrivateRoutes>
        ),
      },
      {
        path: "products",
        element: (
          <PrivateRoutes>
            <Suspense fallback={<Loading />}>
              <Products />
            </Suspense>
          </PrivateRoutes>
        ),
      },
      {
        path: "party",
        element: (
          <PrivateRoutes>
            <Suspense fallback={<Loading />}>
              <Party />
            </Suspense>
          </PrivateRoutes>
        ),
      },
      {
        index: true,
        element: <Navigate to="party" />,
      },
      {
        path: "ordersStatus",
        element: (
          <PrivateRoutes>
            <Suspense fallback={<Loading />}>
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
        <Suspense fallback={<Loading />}>
          <Login />
        </Suspense>
      </GuestRoutes>
    ),
  },
]);
