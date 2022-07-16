import styled from "styled-components";
import { PageContainer } from "../pages.style";
import { device } from "../../utils/Constants";
import { Heading1 } from "../../styles/typography/headers.style";
import {
  subHeading1,
  subHeading2,
} from "../../styles/typography/subheaders.style";
import { NavLink } from "../../components/navigation/Navigation.style";

export const HomePageContainer = styled(PageContainer)`
  display: flex;
  align-items: center;
  background-image: url(${require("../../common/assets/home/background-home-desktop.jpg")});

  @media ${device.tablet} {
    background-image: url(${require("../../common/assets/home/background-home-tablet.jpg")});
  }

  @media ${device.mobile} {
    background-image: url(${require("../../common/assets/home/background-home-mobile.jpg")});
  }
`;

export const HomePageBodyContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const HomePageTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  align-items: center;
`;

export const HomePageButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 150px;
  width: 150px;

  background: white;
  border-radius: 50%;
`;

export const HomePageHeader = styled(Heading1)`
  color: ${({ theme }) => theme.colours.heading};
  margin: 0;
`;

export const HomePageSubHeader = styled(subHeading1)`
  color: ${({ theme }) => theme.colours.subHeading};
`;

export const HomePageParagraph = styled(subHeading2)`
  color: ${({ theme }) => theme.colours.subHeading};
`;

export const HomeNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;

  flex: 1;
  color: black;
`;
