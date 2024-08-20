import axios from "axios";

const config = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1",
});

config.interceptors.response.use((res) => res.data);

export default config;
