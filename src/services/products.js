import axios from "axios";

const products = (limit = 45, offset = 1) => {
  return axios.create({
    baseURL: "https://api.escuelajs.co/api/v1/products",
    params: {
      limit,
      offset,
    },
  });
};

export default products;
