import {
  CREW_URL,
  DESTINATION_URL,
  HOME_URL,
  TECHNOLOGY_URL,
} from "../../utils/Constants";
import {
  NavBarContainer,
  NavBarHeader,
  NavBarHeaderContainer,
  NavLink,
  NavBarLogoContainer,
} from "./NavBar.style";

import Logo from "../../common/assets/shared/logo.svg";

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavBarLogoContainer>
        <NavLink to={HOME_URL}>
          <img src={Logo} alt="logo" />
        </NavLink>
      </NavBarLogoContainer>
      <NavBarHeaderContainer>
        <NavLink to={HOME_URL}>
          <NavBarHeader>00 HOME</NavBarHeader>
        </NavLink>
        <NavLink to={DESTINATION_URL}>
          <NavBarHeader>01 DESTINATION</NavBarHeader>
        </NavLink>
        <NavLink to={CREW_URL}>
          <NavBarHeader>02 CREW</NavBarHeader>
        </NavLink>
        <NavLink to={TECHNOLOGY_URL}>
          <NavBarHeader>03 TECHNOLOGY</NavBarHeader>
        </NavLink>
      </NavBarHeaderContainer>
    </NavBarContainer>
  );
};

export default NavBar;
