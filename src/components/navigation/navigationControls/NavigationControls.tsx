import { useState } from "react";
import { CREW_URL, DESTINATION_URL, HOME_URL, TECHNOLOGY_URL, } from "../../../utils/Constants";
import HamburgerIcon from "../../../common/assets/shared/icon-hamburger.svg";
import CloseIcon from "../../../common/assets/shared/icon-close.svg";
import {
  NavigationControlsContainer,
  NavBarContainer,
  NavBarLink,
  NavBarHeader,
  NavBarHeaderNumber,
  NavMenuContainer,
  NavButtonContainer,
  NavMenuPanel,
  MenuPanelOptions,
  MenuPanelLink,
  MenuPanelHeader,
  MenuPanelNumber
} from "./NavigationControls.style";

const NavigationControls = () => {
  const [menuVisbility, setMenuVisbility] = useState(false)

  return (
    <NavigationControlsContainer>
      <NavBarContainer>
        <NavBarLink to={HOME_URL}>
          <NavBarHeaderNumber>00</NavBarHeaderNumber>
          <NavBarHeader>HOME</NavBarHeader>
        </NavBarLink>
        <NavBarLink to={DESTINATION_URL}>
          <NavBarHeaderNumber>01</NavBarHeaderNumber>
          <NavBarHeader>DESTINATION</NavBarHeader>
        </NavBarLink>
        <NavBarLink to={CREW_URL}>
          <NavBarHeaderNumber>02</NavBarHeaderNumber>
          <NavBarHeader>CREW</NavBarHeader>
        </NavBarLink>
        <NavBarLink to={TECHNOLOGY_URL}>
          <NavBarHeaderNumber>03</NavBarHeaderNumber>
          <NavBarHeader>TECHNOLOGY</NavBarHeader>
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
        <NavMenuPanel $display={!menuVisbility}>
          <MenuPanelOptions>
            <MenuPanelLink to={HOME_URL}>
              <MenuPanelNumber>00</MenuPanelNumber>
              <MenuPanelHeader>HOME</MenuPanelHeader>
            </MenuPanelLink>
            <MenuPanelLink to={DESTINATION_URL}>
              <MenuPanelNumber>01</MenuPanelNumber>
              <MenuPanelHeader>DESTINATION</MenuPanelHeader>
            </MenuPanelLink>
            <MenuPanelLink to={CREW_URL}>
              <MenuPanelNumber>02</MenuPanelNumber>
              <MenuPanelHeader>CREW</MenuPanelHeader>
            </MenuPanelLink>
            <MenuPanelLink to={TECHNOLOGY_URL}>
              <MenuPanelNumber>03</MenuPanelNumber>
              <MenuPanelHeader>TECHNOLOGY</MenuPanelHeader>
            </MenuPanelLink>
          </MenuPanelOptions>
        </NavMenuPanel>
      </NavMenuContainer>
    </NavigationControlsContainer>
  );
};

export default NavigationControls;
