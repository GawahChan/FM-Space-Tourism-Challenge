import styled from "styled-components";
import { PageBodyContainer, PageContainer } from "../pages.style";
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
    flex-direction: column;
  }

  @media ${device.mobile} {
    background-image: url(${require("../../common/assets/home/background-home-mobile.jpg")});
    padding: 0px;
  }
`;

export const HomePageTextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HomePageSubHeader = styled(subHeading1)`
  color: ${({ theme }) => theme.colours.subHeading};

  @media ${device.mobile} {
    font-size: ${({ theme }) => theme.fontSize.subheading2}
  }
`;

export const HomePageHeader = styled(Heading1)`
  color: ${({ theme }) => theme.colours.heading};
  margin: 0;

  @media ${device.mobile} {
    font-size: ${({ theme }) => theme.fontSize.heading2}
  }
`;

export const HomePageParagraph = styled(subHeading2)`
  color: ${({ theme }) => theme.colours.subHeading};
  width: 450px;
  padding-left: 20px;

  @media ${device.mobile} {
    width: 320px;
  }
`;

export const HomePageButtonContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HomeNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 150px;
  width: 150px;

  color: black;
  background: white;
  border-radius: 50%;
  cursor: pointer;
`;