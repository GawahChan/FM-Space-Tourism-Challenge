import { useState } from "react";
import {
  CREW_URL,
  DESTINATION_URL,
  HOME_URL,
  TECHNOLOGY_URL,
} from "../../../utils/Constants";
import {
  NavigationControlsContainer,
  NavBarContainer,
  NavBarLink,
  NavBarHeader,
  NavMenuContainer,
  NavButtonContainer
} from "./NavigationControls.style";
import HamburgerIcon from "../../../common/assets/shared/icon-hamburger.svg";
import CloseIcon from "../../../common/assets/shared/icon-close.svg";

const NavigationControls = () => {
  const [menuVisbility, setMenuVisbility] = useState(false)

  console.log(menuVisbility)

  return (
    <NavigationControlsContainer>
      <NavBarContainer>
        <NavBarLink to={HOME_URL}>
          <NavBarHeader>00 HOME</NavBarHeader>
        </NavBarLink>
        <NavBarLink to={DESTINATION_URL}>
          <NavBarHeader>01 DESTINATION</NavBarHeader>
        </NavBarLink>
        <NavBarLink to={CREW_URL}>
          <NavBarHeader>02 CREW</NavBarHeader>
        </NavBarLink>
        <NavBarLink to={TECHNOLOGY_URL}>
          <NavBarHeader>03 TECHNOLOGY</NavBarHeader>
        </NavBarLink>
      </NavBarContainer>
      <NavMenuContainer>
        <NavButtonContainer
          id="hamburger_menu_icon"
          $display={menuVisbility}
          onClick={() => setMenuVisbility(!menuVisbility)}
        >
          <img src={HamburgerIcon} alt="Menu Icon" />
        </NavButtonContainer>
        <NavButtonContainer
          id="close_menu_icon"
          $display={!menuVisbility}
          onClick={() => setMenuVisbility(!menuVisbility)}
        >
          <img src={CloseIcon} alt="Close Menu Icon" />
        </NavButtonContainer>
      </NavMenuContainer>
    </NavigationControlsContainer>
  );
};

export default NavigationControls;