import { LOCATION, HOME, LOGIN } from "@common/path.js";
import LocationTemplate from "@templates/user/location/index.js";
import { createLocationButtonMolecule } from "@molecules";
import { createBackdropPopupInputOrganism } from "@organisms";
import { clearChild } from "@utils/render.js";
import {
  addLocationRequest,
  getMyLocationRequest,
  removeLocationRequest,
} from "../../../../remotes/UserRemote.js";

const path = LOCATION;

let states = {
  locations: [],
};

const getPage = ({ router, isLogin }) => {
  if (!isLogin) {
    alert("로그인이 필요합니다");
    router.push(LOGIN);
    return;
  }
  const renderLocationButton = (locations) => {
    const $locationButtonWrapper = document.querySelector(
      ".location-button-wrapper"
    );

    const $locationButtons = locations.map((location) => {
      const $locationButton = createLocationButtonMolecule({
        location,
        removeLocation,
      });

      return $locationButton;
    });

    if ($locationButtons.length < 2) {
      const $addLocationButton = createLocationButtonMolecule({ addLocation });

      $locationButtons.push($addLocationButton);
    }

    clearChild($locationButtonWrapper);
    $locationButtonWrapper.append(...$locationButtons);
  };

  const onClickBackButton = () => {
    router.push(HOME);
  };

  const addLocation = (e) => {
    const onClickPerformButton = (e) => {
      const location = $popupInput.querySelector("input").value;

      addLocationRequest(location).then((isOk) => {
        if (isOk) {
          states = { locations: [...states.locations, location] };

          renderLocationButton(states.locations);
        } else {
          alert("동네 등록 실패");
        }

        $popupInput.remove();
      });
    };

    const onClickCancelButton = () => {
      $popupInput.remove();
    };

    const onChange = (e) => {
      const { value } = e.target;
      const $performButton = e.target.parentElement.lastChild;

      $performButton.disabled = value.trim().length < 1 ? true : false;
    };

    const $popupInput = createBackdropPopupInputOrganism({
      message: "우리 동네를 입력하세요",
      placeholder: "시∙구 제외, 동만 입력",
      onClickPerformButton,
      onClickCancelButton,
      onChange,
    });

    const $app = document.querySelector("#app");

    $app.append($popupInput);
  };

  const removeLocation = (e) => {
    const location = e.target.closest("button").firstChild.textContent;

    removeLocationRequest(location).then((isOk) => {
      if (isOk) {
        const removedLocation =
          e.target.closest("button").firstChild.textContent;

        states = {
          locations: states.locations.filter(
            (location) => location !== removedLocation
          ),
        };

        renderLocationButton(states.locations);
      } else {
        alert("삭제 실패");
      }
    });
  };

  return getMyLocationRequest().then(({ locations }) => {
    locations = locations.map((location) => location.name);

    states = { locations };

    const $template = LocationTemplate({
      locations,
      onClickBackButton,
      addLocation,
      removeLocation,
    });

    return $template;
  });
};

const UserLocation = {
  path,
  getPage,
};

export default UserLocation;
