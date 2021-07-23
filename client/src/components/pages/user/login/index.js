import { createLoginTemplate } from "@templates";
import { LOGIN, LOGOUT, HOME } from "@common/path.js";
import { loginRequest } from "../../../../remotes/UserRemote.js";

const path = LOGIN;
let username = "";

export const getPage = ({ router, isLogin }) => {
  if (isLogin) {
    alert("이미 로그인 했습니다.");
    router.push(LOGOUT);
    return;
  }

  const onChangeInput = (e) => {
    username = e.target.value;

    e.target.nextSibling.disabled = username.trim().length < 1;
  };

  const onClickLoginButton = () => {
    loginRequest(username).then((result) => {
      if (result === true) {
        router.push(LOGOUT);
      } else {
        alert(result);
      }
    });
  };

  const onClickBackButton = () => {
    router.push(HOME);
  };

  const $loginTemplate = createLoginTemplate({
    onChangeInput,
    onClickLoginButton,
    onClickBackButton,
  });

  return $loginTemplate;
};

const Login = {
  path,
  getPage,
};

export default Login;
