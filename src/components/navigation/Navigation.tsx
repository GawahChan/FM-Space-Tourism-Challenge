import {
  NavigationContainer,
  NavLogoContainer,
  NavLink,
} from "./Navigation.style";
import { HOME_URL } from "../../utils/Constants";
import Logo from "../../common/assets/shared/logo.svg";
import NavBar from "./navBar/NavBar";

const Navigation = () => {
  return (
    <NavigationContainer>
      <NavLogoContainer>
        <NavLink to={HOME_URL}>
          <img src={Logo} alt="logo" />
        </NavLink>
      </NavLogoContainer>
      <NavBar />
    </NavigationContainer>
  );
};

export default Navigation;
