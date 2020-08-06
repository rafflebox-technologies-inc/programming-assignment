import Axios from 'axios';

export default Axios.create({
  baseURL: 'http://127.0.0.1:3000/cities',
  headers: {
    "Content-type": "application/json"
  }
});
