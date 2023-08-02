import {
  NavigationContainer,
  NavLogoContainer,
  NavLink,
} from "./Navigation.style";
import { HOME_URL } from "../../utils/Constants";
import Logo from "../../common/assets/shared/logo.svg";
import NavigationControls from "./navigationControls/NavigationControls";

const Navigation = () => {
  return (
    <NavigationContainer>
      <NavLogoContainer>
        <NavLink to={HOME_URL}>
          <img src={Logo} alt="Galactic Stelar Voyages Logo" />
        </NavLink>
      </NavLogoContainer>
      <NavigationControls />
    </NavigationContainer>
  );
};

export default Navigation;
