
import { createBrowserRouter } from "react-router";
import { Layout } from "../layout/Layout";
import { GuestRoutes } from "../Providers/GuestRoutes"
import { Login } from "../../pages/login";
import { Suspense } from "react";
import { Statistics } from "../../pages/statistics";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/statistics",
        element: <Suspense>
          <Statistics/>
        </Suspense>
      }
    ]
  },
  {
    path: "/login",
    element: <GuestRoutes>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Login/>
      </Suspense>
    </GuestRoutes>
  },
]);