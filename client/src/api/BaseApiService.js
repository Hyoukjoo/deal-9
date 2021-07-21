const API_URL = "http://localhost:4000";

export default class BaseApiService {
  constructor(path) {
    const url = new URL(`api/${path}`, API_URL);
    this.url = url.href;
  }

  get(path, config) {
    return fetch(`${this.url}/${path}`, {
      method: "get",
      ...config,
    });
  }

  post(path, body, config) {
    return fetch(`${this.url}/${path}`, {
      method: "post",
      body: JSON.stringify(body),
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
      ...config,
    });
  }
}

// export const base_request = ({ method, path, body, config }) => {
//   return fetch({
//     method,
//     url: url.href,
//     headers,
//     credentials: "include",
//     body,
//     ...config,
//   });
// };

// export const get_request = ({ path, ...config }) => {
//   return base_request({ method: "get", path, ...config });
// };

// export const post_request = ({ path, body, ...config }) => {
//   return base_request({ method: "post", path, body, ...config });
// };

// export const put_request = ({ path, body, ...config }) => {
//   return base_request({ method: "put", path, body, ...config });
// };

// export const delete_request = ({ path, ...config }) => {
//   return base_request({ method: "delete", path, ...config });
// };
