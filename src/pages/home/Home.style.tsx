import styled from "styled-components";
import { PageContainer } from "../pages.style";
import { device } from "../../utils/Constants";

export const HomePageContainer = styled(PageContainer)`
  background-image: url(${require("../../common/assets/home/background-home-desktop.jpg")});

  @media ${device.tablet} {
    background-image: url(${require("../../common/assets/home/background-home-tablet.jpg")});
  }

  @media ${device.mobile} {
    background-image: url(${require("../../common/assets/home/background-home-mobile.jpg")});
  }
`;
