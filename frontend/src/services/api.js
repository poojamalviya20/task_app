import axios from "axios";

const API = axios.create({
  baseURL: "http://52.66.209.178:5000/api",
});

export default API;
