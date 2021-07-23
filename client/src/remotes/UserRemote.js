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
  } catch {
    alert("서버 에러가 발생했습니다.");
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
  } catch {
    alert("서버 에러가 발생했습니다.");
  }
};

export const logoutRequest = () => {
  try {
    return UserApiService.logout().then((result) => result.ok);
  } catch {
    alert("서버 에러가 발생했습니다.");
  }
};

export const addLocationRequest = (location) => {
  try {
    return UserApiService.addLocation(location).then((result) => result.ok);
  } catch (e) {
    alert("서버 에러가 발생했습니다.");
  }
};

export const getMyLocationRequest = () => {
  try {
    return UserApiService.getMyLocation().then((result) => result.json());
  } catch {
    alert("서버 에러가 발생했습니다.");
  }
};

export const removeLocationRequest = (location) => {
  try {
    return UserApiService.removeLocation(location).then((result) => result.ok);
  } catch {
    alert("서버 에러가 발생했습니다.");
  }
};

export const getMyInfoRequest = () => {
  try {
    return UserApiService.getMyInfo().then((result) => result.json());
  } catch {
    alert("서버 에러가 발생했습니다.");
  }
};
