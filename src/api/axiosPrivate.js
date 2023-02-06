import axios from "axios";

const axiosPrivate = axios.create({
    baseURL: 'https://school-manage.onrender.com',
    timeout: 1000
  });

  export default axiosPrivate;