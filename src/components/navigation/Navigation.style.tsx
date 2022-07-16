import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../../utils/Constants";

export const NavigationContainer = styled.div`
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

export const NavLogoContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;

  box-sizing: border-box;
  padding: 20px 30px 20px 30px;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;
