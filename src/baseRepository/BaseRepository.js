import Axios from "axios";

const headers = {
  "Content-Type": "application/json",
  accept: "application/json",
  "X-Requested-With": "XMLHttpRequest"
};
var axios = Axios.create({
  headers
});


export default axios;

