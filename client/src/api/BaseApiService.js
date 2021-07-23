import env from "../../config/env.js";

const API_URL = env.API_URL || "http://localhost:4000";

export default class BaseApiService {
  constructor(path) {
    const url = new URL(`api/${path}`, API_URL);
    this.url = url.href;
  }
  qureyString(paramsObj) {
    return Object.entries(paramsObj)
      .map(([k, v]) => k + "=" + v)
      .join("&");
  }

  #baseFetch({ path, data, contentType, ...config }) {
    const headers = {
      ...config?.["headers"],
    };

    switch (contentType) {
      case "json":
        headers["Content-Type"] = "application/json";
        config.body = JSON.stringify(data);
        break;
      case "formData":
        // headers["Content-Type"] = undefined;
        config.body = data;
        break;
      default:
        break;
    }

    return fetch(`${this.url}/${path}`, {
      mode: "cors",
      credentials: "include",
      headers,
      ...config,
    });
  }

  get(path, config = {}) {
    return this.#baseFetch({
      method: "get",
      path,
      ...config,
    });
  }

  post(path, data, { contentType = "json", ...config } = {}) {
    return this.#baseFetch({
      method: "post",
      path,
      data,
      contentType,
      ...config,
    });
  }

  put(path, data, { contentType = "json", ...config } = {}) {
    return this.#baseFetch({
      method: "put",
      path,
      data,
      contentType,
      ...config,
    });
  }

  delete(path, config = {}) {
    return this.#baseFetch({
      method: "delete",
      path,
      ...config,
    });
  }
}
