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

  getToken() {
    return localStorage.getItem(TOKEN_KEY);
  },

  logout() {
    localStorage.removeItem(TOKEN_KEY);
  },
};

export default authService;
