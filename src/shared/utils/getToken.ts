export const getAccessToken = (): string | null => {
  return localStorage.getItem("access_token") ?? null;
};

export const getRefreshToken = (): string | null => {
  return localStorage.getItem("refresh_token") ?? null;
};
