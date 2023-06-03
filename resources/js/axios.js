import axios from "axios";
import Vue from 'vue';
import { get} from "lodash";

axios.defaults.baseURL = "/api/"; // change this if you want to use a different url for APIs
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

axios.interceptors.response.use(
  (response) => {
    const message = get(response,'data.message')

    if (message) {
      Vue.toasted.success(message)
    }
    return response;
  },
  (error) => {
    const message = get(error,'response.data.message')

    if (message) {
      Vue.toasted.error(message)
    }

    // Handle error responses
    return Promise.reject(error);
  })
