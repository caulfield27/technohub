import axios from "axios";
import { getAccessToken, getRefreshToken } from "@/shared/utils/getToken";
import { useGlobalStore } from "@/shared/store/global.store";

const baseURL =
  import.meta.env.VITE_BASE_URL ?? "http://79.133.183.218:8880/api/v1";

export const request = axios.create({
  baseURL,
});

request.interceptors.request.use((config) => {
  const token = getRefreshToken();
  if (token) {
    config.headers["token"] = token;
  }
  return config;
});

request.interceptors.response.use(
  (request) => {
    const { setToast } = useGlobalStore.getState();
    if (request.status === 201) {
      setToast({
        show: true,
        title: request?.data?.res?.message ?? request.data?.message ?? "Данные успешно добавлены",
        options: {
          intent: "success",
        },
      });
    }

    if (request.status === 204) {
      setToast({
        show: true,
        title: request?.data?.message || "Данные успешно удалены",
        options: {
          intent: "success",
        },
      });
    }

    if (request.status === 402) {
      const refreshToken = getRefreshToken();
      if (refreshToken) {
        axios
          .get(`${baseURL}${apiUrl.refresh}`, {
            headers: { token: refreshToken },
          })
          .then((response) => {
            localStorage.setItem("access_token", response.data.access_token);
            localStorage.setItem("refresh_token", response.data.refresh_token);
            request.headers["token"] = response.data.access_token;
            return request;
          });
      }
    }

    return request;
  },
  (error) => {
    const { setToast } = useGlobalStore.getState();

    setToast({
      show: true,
      title: error?.message || "Произошла ошибка",
      options: {
        intent: "error",
      },
    });
  }
);

export function logout() {
  request.get(apiUrl.logout, {
    headers: {
      "refresh-token": getRefreshToken() ?? "",
      "token": getAccessToken() ?? ""
    }
  });

  localStorage.removeItem('access_token');
  localStorage.removeItem('refresh_token');

  window.location.href = "/";

}

export const apiUrl = {
  warehouse: "/warehouse/all",
  refresh: "/auth/refresh-token",
  login: "/auth/log-in",
  getMe: "/user/me",
  users: "/user/all",
  createUser: "/user/create-user",
  roles: "/user/roles",
  products: "/product/all",
  createWarehouse: "/warehouse/create",
  getCategories: "/category/get-categories",
  createCategory: "/category/create-category",
  orders: "/order/get-orders",
  batchNew: "/batch/new",
  orderProduct: "/product/order",
  party: "/batch/all",
  stats: "/statistics/get-statistics",
  logout: "/auth/log-out"
}