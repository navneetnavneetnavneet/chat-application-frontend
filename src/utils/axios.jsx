import axios from "axios";

const instace = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: true,
});

export default instace;
