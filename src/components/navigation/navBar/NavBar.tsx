import {
  CREW_URL,
  DESTINATION_URL,
  HOME_URL,
  TECHNOLOGY_URL,
} from "../../../utils/Constants";
import {
  NavBarContainer,
  NavBarHeader,
  NavBarHeaderContainer,
  NavBarLink,
} from "./NavBar.style";

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavBarLink to={HOME_URL}>
        <NavBarHeaderContainer>
          <NavBarHeader>00 HOME</NavBarHeader>
        </NavBarHeaderContainer>
      </NavBarLink>
      <NavBarLink to={DESTINATION_URL}>
        <NavBarHeaderContainer>
          <NavBarHeader>01 DESTINATION</NavBarHeader>
        </NavBarHeaderContainer>
      </NavBarLink>
      <NavBarLink to={CREW_URL}>
        <NavBarHeaderContainer>
          <NavBarHeader>02 CREW</NavBarHeader>
        </NavBarHeaderContainer>
      </NavBarLink>
      <NavBarLink to={TECHNOLOGY_URL}>
        <NavBarHeaderContainer>
          <NavBarHeader>03 TECHNOLOGY</NavBarHeader>
        </NavBarHeaderContainer>
      </NavBarLink>
    </NavBarContainer>
  );
};

export default NavBar;
