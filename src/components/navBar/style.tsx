import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const NavBarLink = styled(Link)`
  text-decoration: none;
  padding: 10px;
`;

export const NavBarHeader = styled.h1`
  font-family: Barlow Condensed Regular;
  font-size: 16px;
  letter-spacing: 2.7px;
`;
