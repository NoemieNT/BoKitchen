import axios from "axios";

// const url = process.env.REACT_APP_BACKEND_URL;

class APIHandler {
  constructor() {
    this.instance = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URL
    });
  }

  get(url) {
    return this.instance.get(url);
  }

  post(url, data) {
    return this.instance.post(url, data);
  }
}

export default new APIHandler();
