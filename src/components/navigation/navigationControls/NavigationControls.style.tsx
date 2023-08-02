import styled from "styled-components";
import { device } from "../../../utils/Constants";
import { NavLink } from "../Navigation.style";

export const NavigationControlsContainer = styled.div`
  flex: 1;

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

  backdrop-filter: blur(10px);

  @media ${device.tablet} {
    background-color: #1a1a2279;
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

export const NavBarHeader = styled.h1`
  color: ${({ theme }) => theme.colours.navText};
  font-family: ${({ theme }) => theme.typography.secondary};
  font-size: ${({ theme }) => theme.fontSize.navText};
  letter-spacing: ${({ theme }) => theme.characterSpace.navText};
  font-weight: normal
`;

export const NavBarHeaderNumber = styled(NavBarHeader)`
  font-weight: bold;
  padding: 7px;
  box-sizing: border-box;

  @media ${device.tablet} {
    display: none;
  }
`

export const NavMenuContainer = styled.div`
  display: none;
  width: 100%;
  height: 100%;

  @media ${device.mobile} {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`

export const NavButtonContainer = styled.div<{ $display?: boolean }>`
  display: ${props => props.$display? "flex" : "none"};
  box-sizing: border-box;
  padding: 20px 30px 30px 30px;
`