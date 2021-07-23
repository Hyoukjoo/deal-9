import { createLogoutTemplate } from "@templates";
import { LOGOUT, LOGIN, HOME } from "@common/path.js";
import {
  getMyInfoRequest,
  logoutRequest,
} from "../../../../remotes/UserRemote.js";

const path = LOGOUT;

export const getPage = ({ router }) => {
  const onClickBackButton = () => {
    router.push(HOME);
  };

  const onClickLogoutButton = () => {
    logoutRequest().then((result) => {
      if (result) {
        router.push(LOGIN);
      }
    });
  };

  return getMyInfoRequest().then(({ username }) => {
    const $logoutTemplate = createLogoutTemplate({
      onClickBackButton,
      onClickLogoutButton,
      username,
    });

    return $logoutTemplate;
  });
};

const UserLogout = {
  path,
  getPage,
};

export default UserLogout;
