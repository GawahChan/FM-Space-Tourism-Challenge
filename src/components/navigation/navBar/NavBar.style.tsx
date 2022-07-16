import styled from "styled-components";
import { device } from "../../../utils/Constants";
import { NavLink } from "../Navigation.style";

export const NavBarContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  align-items: center;

  box-sizing: border-box;
  backdrop-filter: blur(10px);

  @media ${device.tablet} {
    flex: 2;
    background-color: #1a1a2279;
  }
`;

export const NavBarHeader = styled.h1`
  color: ${({ theme }) => theme.colours.navText};
  font-family: ${({ theme }) => theme.typography.secondary};
  font-size: ${({ theme }) => theme.fontSize.navText};
  letter-spacing: ${({ theme }) => theme.characterSpace.navText};
  font-weight: normal;
`;

export const NavBarHeaderContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;

  :hover {
    border-bottom: 3px solid ${({ theme }) => theme.colours.navText};
  }
`;

export const NavBarLink = styled(NavLink)`
  height: 100%;
`;
