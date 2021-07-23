import BaseApiService from "./BaseApiService.js";

class UserApiService extends BaseApiService {
  signup(username, location) {
    return this.post("signup", { username, location });
  }

  login(username) {
    return this.post("login", { username });
  }

  logout() {
    return this.post("logout");
  }

  addLocation(location) {
    return this.post("location", { location });
  }

  removeLocation(location) {
    return this.delete(`location/${location}`);
  }

  getMyInfo() {
    return this.get("");
  }

  getMyLocation() {
    return this.get("location");
  }
}

export default new UserApiService("users");
