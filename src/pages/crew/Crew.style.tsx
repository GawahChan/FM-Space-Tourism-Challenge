import styled from "styled-components";
import { PageContainer } from "../Shared.style";
import { device } from "../../utils/Constants";

export const CrewPageContainer = styled(PageContainer)`
  background-image: url(${require("../../common/assets/crew/background-crew-desktop.jpg")});

  @media ${device.tablet} {
    background-image: url(${require("../../common/assets/crew/background-crew-tablet.jpg")});
  }

  @media ${device.mobile} {
    background-image: url(${require("../../common/assets/crew/background-crew-mobile.jpg")});
  }
`;
