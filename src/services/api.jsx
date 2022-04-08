import axios from "axios";

const api = axios.create({
  baseURL: "http://api-transformacao-digital.herokuapp.com/",
});

export default api;
