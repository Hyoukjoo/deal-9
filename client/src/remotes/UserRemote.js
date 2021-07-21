import UserApiService from "../api/UserApiService.js";

export const signupRequest = (username, location) => {
  try {
    return UserApiService.signup(username, location).then((result) =>
      result.json()
    );
  } catch (e) {
    throw e;
  }
};

export const loginRequest = (username) => {
  try {
    return UserApiService.login(username).then((result) => result.json());
  } catch (e) {
    throw e;
  }
};

export const logoutRequest = () => {
  try {
    return UserApiService.logout().then((result) => result.json());
  } catch {
    throw e;
  }
};

export const addLocationRequest = (location) => {
  try {
    return UserApiService.addLocation(location).then((result) => result.json());
  } catch (e) {
    throw e;
  }
};

export const removeLocationRequest = (location) => {
  try {
    return UserApiService.removeLocation(location).then((result) =>
      result.json()
    );
  } catch {}
};
