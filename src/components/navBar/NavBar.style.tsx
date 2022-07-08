import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../utils/Constants";

export const NavBarContainer = styled.div`
  display: flex;

  position: fixed;
  width: 100%;
  box-sizing: border-box;
  padding-top: 20px;

  @media ${device.tablet} {
    padding: 0;
  }

  @media ${device.mobile} {
    padding: 0;
  }
`;

export const NavBarLogoContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;

  box-sizing: border-box;
  padding: 20px 30px 20px 30px;
`;

export const NavBarHeaderContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  align-items: center;

  box-sizing: border-box;
  backdrop-filter: blur(10px);
  padding: 10px;

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
  margin: 10px;
  height: 100%;

  :hover {
    border-bottom: 3px solid ${({ theme }) => theme.colours.navText};
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;
