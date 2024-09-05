import axios from "axios";

const token = localStorage.getItem("token");

export default axios.create({
  baseURL: "https://dental-clinic-lqrz.onrender.com/api/",
  headers: { Authorization: `Bearer ${token}` },
});
