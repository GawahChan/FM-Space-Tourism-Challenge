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
  NavBarLink,
  NavBarLogoContainer,
} from "./NavBar.style";

import Logo from "../../common/assets/shared/logo.svg";

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavBarLogoContainer>
        <NavBarLink to={HOME_URL}>
          <img src={Logo} alt="logo" />
        </NavBarLink>
      </NavBarLogoContainer>
      <NavBarHeaderContainer>
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
      </NavBarHeaderContainer>
    </NavBarContainer>
  );
};

export default NavBar;
