import styled from "styled-components";
import { device } from "../../../utils/Constants";
import { NavLink } from "../Navigation.style";
import { NavigationHeading, NavigationHeadingNumber } from "../../../styles/typography/headers.style";

export const NavigationControlsContainer = styled.div`
  flex: 1.5;

  @media ${device.tablet} {
    flex: 5;
  }
`

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  width: 100%;
  height: 100%;

  backdrop-filter: blur(15px);
  background-color: #ffffff04;

  padding-left: 30px;
  padding-right: 50px;
  box-sizing: border-box;

  @media ${device.tablet} {
    background-color: #1a1a2279;
    padding-left: 20px;
    padding-right: 20px;
  }

  @media ${device.mobile} {
    display: none;
  }
`;

export const NavBarLink = styled(NavLink)`
  display: flex;
  height: 100%;
  align-items: center;

  padding: 5px;
  box-sizing: border-box;

  :hover {
    border-bottom: 3px solid ${({ theme }) => theme.colours.navText};
  }
`;

export const NavBarHeader = styled(NavigationHeading)`
  color: ${({ theme }) => theme.colours.navText};
`;

export const NavBarHeaderNumber = styled(NavigationHeadingNumber)`
  color: ${({ theme }) => theme.colours.navText};
  padding: 7px;
  box-sizing: border-box;

  @media ${device.tablet} {
    display: none;
  }
`

export const NavMenuContainer = styled.div`
  display: none;

  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    height: 100%;
    width: 100%;
  }
`

export const NavButtonContainer = styled.div<{ $display?: boolean }>`
  display: ${props => props.$display? "fixed" : "none"};
  box-sizing: border-box;
  padding: 20px 30px 30px 30px;
  z-index: 1;
`

export const NavMenuPanel = styled.div<{ $display?: boolean }>`
  position: fixed;
  top: 0;
  right: ${props => props.$display? "0" : "-300px"};
  width: 200px;
  height: 100%;
  background-color: #1a1a2279;
  backdrop-filter: blur(15px);
`

export const MenuPanelOptions = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px 0px 100px 20px;
  box-sizing: border-box;
`

export const MenuPanelLink = styled (NavBarLink)`
:hover {
  border-right: 3px solid ${({ theme }) => theme.colours.navText};
  border-bottom: none;
}
`
export const MenuPanelHeader = styled(NavigationHeading)`
  color: ${({ theme }) => theme.colours.navText};
`
export const MenuPanelNumber = styled(NavigationHeadingNumber)`
  color: ${({ theme }) => theme.colours.navText};
  padding: 7px;
  box-sizing: border-box;
`