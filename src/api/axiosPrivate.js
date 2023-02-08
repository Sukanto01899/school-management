import axios from "axios";

const axiosPrivate = axios.create({
    baseURL: 'https://school-manage.onrender.com',
  });

  export default axiosPrivate;