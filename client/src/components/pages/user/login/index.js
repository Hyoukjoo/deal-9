import { createLoginTemplate } from "@templates";
import { LOGIN, USER } from "@common/path.js";

const path = USER + LOGIN;
let id;

export const getPage = ({ router }) => {
  const onChangeInput = (e) => {
    id = e.target.value;
  };

  const onClickLoginButton = () => {
    //test;;;;
    console.log(id);
  };

  const onClickBackButton = () => {
    router.back();
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