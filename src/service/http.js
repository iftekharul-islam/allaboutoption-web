import axios from "axios";
import { API_URL } from "../config";

let Api = axios.create({
  baseURL: API_URL,

  headers: {
    "Content-type": "application/json",
    accept: "application/json",
  },
  transformResponse: (data) => {
    let response = JSON.parse(data);
    return response;
  },

  validateStatus: function (status) {
    if (status === 401) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("user");
    }

    if (status === 422) {
      return status;
    }

    return status;
  },
});

Api.interceptors.request.use((config) => {
  if (localStorage.getItem("accessToken")) {
    config.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("accessToken"))}`;
  }
  return config;
});

export default Api;
