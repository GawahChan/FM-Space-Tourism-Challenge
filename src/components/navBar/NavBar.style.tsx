import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../utils/Constants";

export const NavBarContainer = styled.div`
  display: flex;

  position: fixed;
  width: 100%;
  box-sizing: border-box;
  padding-top: 20px;
`;

export const NavBarLogoContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;

  box-sizing: border-box;
  padding-left: 30px;
  padding-right: 30px;
`;

export const NavBarHeaderContainer = styled.div`
  display: flex;
  flex: 2;
  justify-content: flex-end;

  backdrop-filter: blur(10px);
  box-sizing: border-box;
  padding: 10px;

  @media ${device.tablet} {
    flex: 2;
  }
`;

export const NavBarHeader = styled.h1`
  color: ${({ theme }) => theme.colours.navText};
  font-family: ${({ theme }) => theme.typography.secondary};
  font-size: ${({ theme }) => theme.fontSize.navText};
  letter-spacing: ${({ theme }) => theme.characterSpace.navText};
  font-weight: normal;
  margin: 10px;
`;

export const NavBarLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;
