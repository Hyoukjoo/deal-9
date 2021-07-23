import { createLogoutTemplate } from "@templates";
import { LOGOUT, LOGIN, HOME } from "@common/path.js";
import {
  getMyInfoRequest,
  logoutRequest,
} from "../../../../remotes/UserRemote.js";

const path = LOGOUT;

export const getPage = ({ router, isLogin }) => {
  if (!isLogin) {
    alert("로그인이 필요합니다");
    router.push(LOGIN);
    return;
  }

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

  return getMyInfoRequest()
    .then(({ user }) => {
      const $logoutTemplate = createLogoutTemplate({
        onClickBackButton,
        onClickLogoutButton,
        username: user.name,
      });

      return $logoutTemplate;
    })
    .catch((e) => {
      console.log(e);
    });
};

const UserLogout = {
  path,
  getPage,
};

export default UserLogout;
