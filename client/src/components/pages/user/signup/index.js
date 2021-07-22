import { createAlertMolecule } from "@molecules";
import { createSignupTemplate } from "@templates";
import { SIGNUP, LOGOUT } from "@common/path.js";

const path = SIGNUP;
let id = "";
let location = "";
const locationRE = /([가-힇\d]+[동]$)/;
const idRE = /^[a-zA-Z0-9]{1,20}$/;

export const getPage = ({ router, $app }) => {
  const onClickBackButton = () => {
    router.back();
  };

  const onChangeIDInput = (e) => {
    id = e.target.value;
  };

  const onChangeLocationInput = (e) => {
    location = e.target.value;
  };

  // TODO: 수정필요...
  const onClickSignupButton = () => {
    console.log(id, location);
    const isValidLocation = locationRE.test(location);
    const isValidID =
      idRE.test(id) && id.search(/[a-zA-Z]/gi) >= 0 && id.search(/[0-9]/g) >= 0;

    if (isValidLocation && isValidID) {
      console.log("request");
      router.push(LOGOUT);
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
