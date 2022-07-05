import styled from "styled-components";
import { PageContainer } from "../pages.style";
import { device } from "../../utils/Constants";

export const TechnologyPageContainer = styled(PageContainer)`
  background-image: url(${require("../../common/assets/technology/background-technology-desktop.jpg")});

  @media ${device.tablet} {
    background-image: url(${require("../../common/assets/technology/background-technology-tablet.jpg")});
  }

  @media ${device.mobile} {
    background-image: url(${require("../../common/assets/technology/background-technology-mobile.jpg")});
  }
`;
