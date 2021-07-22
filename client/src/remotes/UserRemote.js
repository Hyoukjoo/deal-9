import UserApiService from "../api/UserApiService.js";

export const signupRequest = (username, location) => {
  try {
    return UserApiService.signup(username, location).then((result) => {
      if (result.ok) {
        return true;
      } else {
        return result.json().then(({ message }) => message);
      }
    });
  } catch (e) {
    throw e;
  }
};

export const loginRequest = (username) => {
  try {
    return UserApiService.login(username).then((result) => {
      if (result.ok) {
        return true;
      } else {
        return result.json().then(({ message }) => message);
      }
    });
  } catch (e) {
    throw e;
  }
};

export const logoutRequest = () => {
  try {
    return UserApiService.logout().then((result) => result.ok);
  } catch {
    throw e;
  }
};

export const addLocationRequest = (location) => {
  try {
    return UserApiService.addLocation(location).then((result) => result.ok);
  } catch (e) {
    throw e;
  }
};

export const removeLocationRequest = (location) => {
  try {
    return UserApiService.removeLocation(location).then((result) => result.ok);
  } catch {}
};

export const getMyInfoRequest = () => {
  try {
    return UserApiService.getMyInfo().then((result) => result.json());
  } catch (e) {
    throw e;
  }
};
