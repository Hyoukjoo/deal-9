import { createSignupTemplate } from "@templates";
import { USER, SIGNUP, LOGOUT } from "@common/path.js";
import { signupRequest } from "../../../../remotes/UserRemote.js";

const path = USER + SIGNUP;
let username = "";
let location = "";
const locationRE = /([가-힇\d]+[동]$)/;
const usernameRE = /^[a-zA-Z0-9]{1,20}$/;

export const getPage = ({ router, $app }) => {
  const onClickBackButton = () => {
    router.back();
  };

  const onChangeIDInput = (e) => {
    username = e.target.value;
  };

  const onChangeLocationInput = (e) => {
    location = e.target.value;
  };

  // TODO: 수정필요...
  const onClickSignupButton = () => {
    const isValidLocation = locationRE.test(location);
    const isValidUsername =
      usernameRE.test(username) &&
      username.search(/[a-zA-Z]/gi) >= 0 &&
      username.search(/[0-9]/g) >= 0;

    if (isValidLocation && isValidUsername) {
      signupRequest(username, location);
      // router.push(USER + LOGOUT);
      return;
    }
  };

  const $signupTemplate = createSignupTemplate({
    onClickBackButton,
    onClickSignupButton,
    onChangeIDInput,
    onChangeLocationInput,
  });

  return $signupTemplate;
};

const UserLogout = {
  path,
  getPage,
};

export default UserLogout;
