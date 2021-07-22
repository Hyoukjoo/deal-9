import { createLogoutTemplate } from "@templates";
import { LOGOUT } from "@common/path.js";

const path = LOGOUT;
let id;
let location;

export const getPage = ({ router }) => {
  const onClickBackButton = () => {
    router.back();
  };

  const $logoutTemplate = createLogoutTemplate({ onClickBackButton });

  return $logoutTemplate;
};

const UserLogout = {
  path,
  getPage,
};

export default UserLogout;
