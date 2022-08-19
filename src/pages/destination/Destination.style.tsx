import styled from "styled-components";
import { PageBodyContainer, PageContainer } from "../pages.style";
import { device } from "../../utils/Constants";
import { Heading5, HeadingNumber } from "../../styles/typography/headers.style";

export const DestinationPageContainer = styled(PageContainer)`
  background-image: url(${require("../../common/assets/destination/background-destination-desktop.jpg")});

  @media ${device.tablet} {
    background-image: url(${require("../../common/assets/destination/background-destination-tablet.jpg")});
  }

  @media ${device.mobile} {
    background-image: url(${require("../../common/assets/destination/background-destination-mobile.jpg")});
  }
`;

export const DestinationBodyContainer = styled(PageBodyContainer)`
  flex-direction: column;
`;

export const DestinationHeaderContainer = styled.div`
  display: flex;
  justify-content: start;
`;

export const DestinationHeaderNumber = styled(HeadingNumber)`
  margin: 0;
  padding-right: 20px;
`;

export const DestinationHeader = styled(Heading5)`
  color: ${({ theme }) => theme.colours.heading};
  margin: 0;
`;
