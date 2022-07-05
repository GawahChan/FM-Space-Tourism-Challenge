import styled from "styled-components";
import { PageContainer } from "../Shared.style";
import { device } from "../../utils/Constants";

export const DestinationPageContainer = styled(PageContainer)`
  background-image: url(${require("../../common/assets/destination/background-destination-desktop.jpg")});

  @media ${device.tablet} {
    background-image: url(${require("../../common/assets/destination/background-destination-tablet.jpg")});
  }

  @media ${device.mobile} {
    background-image: url(${require("../../common/assets/destination/background-destination-mobile.jpg")});
  }
`;
