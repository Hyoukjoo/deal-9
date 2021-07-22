import { LOCATION } from "@common/path.js";

import LocationTemplate from "@templates/user/location/index.js";
import { createLocationButtonMolecule } from "@molecules";
import { createBackdropPopupInputOrganism } from "@organisms";
import { clearChild } from "@utils/render.js";

const path = LOCATION;

let states = {
  locations: [],
};

const requestLocationInfo = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ locations: ["자양동"] });
    }, 300);
  });

const requestRemoveLocation = (location) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({ status: 200 });
    }, 300);
  });

const requestAddLocation = (location) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({ status: 200 });
    }, 300);
  });

const getPage = ({ router }) => {
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
    router.back();
  };

  const addLocation = (e) => {
    const onClickPerformButton = (e) => {
      const location = $popupInput.querySelector("input").value;

      requestAddLocation(location).then(({ status }) => {
        if (status === 200) {
          states = { locations: [...states.locations, location] };

          renderLocationButton(states.locations);
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
    requestRemoveLocation().then(({ status }) => {
      if (status === 200) {
        const removedLocation =
          e.target.closest("button").firstChild.textContent;

        states = {
          locations: states.locations.filter(
            (location) => location !== removedLocation
          ),
        };

        renderLocationButton(states.locations);
      }
    });
  };

  return requestLocationInfo().then(({ locations }) => {
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
