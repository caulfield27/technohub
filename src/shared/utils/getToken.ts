export const getToken = (): string | null => {
    return localStorage.getItem("access_token") ?? null;
}