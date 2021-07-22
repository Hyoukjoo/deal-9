import { createSignupTemplate } from "@templates";
import { signupRequest } from "../../../../remotes/UserRemote.js";
import { SIGNUP, LOGOUT } from "@common/path.js";

const path = SIGNUP;
let username = "";
let location = "";
const locationRE = /([가-힇\d]+[동]$)/;
const usernameRE = /^[a-zA-Z0-9]{1,20}$/;

export const getPage = ({ router }) => {
  const onClickBackButton = () => {
    router.back();
  };

  const onChangeIDInput = (e) => {
    username = e.target.value;
  };

  const onChangeLocationInput = (e) => {
    location = e.target.value;
  };

  const onClickSignupButton = () => {
    const isValidLocation = locationRE.test(location);
    const isValidUsername =
      usernameRE.test(username) &&
      username.search(/[a-zA-Z]/gi) >= 0 &&
      username.search(/[0-9]/g) >= 0;

    if (isValidLocation && isValidUsername) {
      signupRequest(username, location).then(({ success }) => {
        if (success) {
          router.push(LOGOUT);
        }
      });
    } else {
      // TODO: alert component 활용
      alert("유효하지 않은 아이디 혹은 동네 이름입니다.");
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
