import {
  CREW_URL,
  DESTINATION_URL,
  HOME_URL,
  TECHNOLOGY_URL,
} from "../../utils/Constants";
import { NavBarContainer, NavBarHeader, NavBarLink } from "./NavBar.style";

const NavBar = () => {
  return (
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
  );
};

export default NavBar;
