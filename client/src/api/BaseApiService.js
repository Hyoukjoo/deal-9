import env from "../../config/env.js";

const API_URL = env.API_URL || "http://localhost:4000";

export default class BaseApiService {
  constructor(path) {
    const url = new URL(`api/${path}`, API_URL);
    this.url = url.href;
  }

  get(path, config) {
    return fetch(`${this.url}/${path}`, {
      method: "get",
      mode: "cors",
      credentials: "include",
      ...config,
    });
  }

  post(path, body, config) {
    return fetch(`${this.url}/${path}`, {
      method: "post",
      body: JSON.stringify(body),
      mode: "cors",
      credentials: "include",
      ...config,
      headers: {
        "Content-Type": "application/json",
        ...config?.[headers],
      },
    });
  }

  put(path, body, config) {
    return fetch(`${this.url}/${path}`, {
      method: "put",
      body: JSON.stringify(body),
      mode: "cors",
      credentials: "include",
      ...config,
      headers: {
        "Content-Type": "application/json",
        ...config?.[headers],
      },
    });
  }

  delete(path, config) {
    return fetch(`${this.url}/${path}`, {
      method: "delete",
      mode: "cors",
      credentials: "include",
      ...config,
    });
  }
}
