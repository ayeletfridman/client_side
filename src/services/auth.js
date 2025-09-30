import http from "./http";

const AUTH_ROUTE = "/api/auth";
const TOKEN_KEY = "auth_token";

export const authService = {
  async login({ username, password }) {
    const { data } = await http.post(`${AUTH_ROUTE}/login`, {
      username,
      password,
    });

    if (data?.token) {
      localStorage.setItem(TOKEN_KEY, data.token);
    }
    return data;
  },

  async logout() {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      await http.post(`${AUTH_ROUTE}/logout`, null, {
        headers: { Authorization: `Bearer ${token}` },
      });
    }
    localStorage.removeItem(TOKEN_KEY);
  },

  async register({ username, password }) {
    const { data } = await http.post(`${AUTH_ROUTE}/register`, {
      username,
      password,
    });
    if (data?.token) localStorage.setItem(TOKEN_KEY, data.token);
    return data;
  },

  getToken() {
    return localStorage.getItem(TOKEN_KEY);
  },
};

export default authService;
