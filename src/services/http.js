import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 10000,
});

http.interceptors.response.use(
  (res) => res,
  (err) => Promise.reject(err)
);

export default http;
