import axios from "axios";

export const api = axios.create({
   baseURL: 'http://10.0.2.2:3333/',
   headers: {
      Authorization: "Bearer Mw.KBA0dEWNkZX5MhzMWLrHoX5HCwidpL9XUaX-l95SXy0ABCw1iX21jQr-QFal"
   }
}) 