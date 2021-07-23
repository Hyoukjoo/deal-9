import { createSignupTemplate } from "@templates";
import { signupRequest } from "../../../../remotes/UserRemote.js";
import { SIGNUP, LOGIN, HOME } from "@common/path.js";

const path = SIGNUP;
let username = "";
let location = "";
const locationRE = /([가-힇\d]+[동]$)/;
const usernameRE = /^[a-zA-Z0-9]{1,20}$/;

export const getPage = ({ router }) => {
  const onClickBackButton = () => {
    router.push(HOME);
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
      signupRequest(username, location).then((result) => {
        if (result) {
          alert("축하드립니다. 회원가입을 성공하셨습니다.");
          router.push(LOGIN);
        } else {
          alert("회원가입을 실패하셨습니다. 다시 시도 부탁드립니다.");
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
