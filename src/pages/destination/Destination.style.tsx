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

export const DestinationPageBodyContainer = styled(PageBodyContainer)`
  align-items: center;
  justify-content: center;
`;

export const DestinationPageImageSection = styled.div``;

export const DestinationPageImageHeaderContainer = styled.div`
  display: flex;
`;

export const DestinationPageImageHeader = styled(Heading5)`
  color: ${({ theme }) => theme.colours.heading};
  margin: 0;
`;

export const DestinationPageHeaderNumber = styled(HeadingNumber)`
  margin: 0;
  padding-right: 20px;
`;
export const DestinationPageImageContainer = styled.div``;
interface DestinationPagePlanetImageProps {
  readonly planet: String;
}

export const DestinationPagePlanetImage = styled.div<DestinationPagePlanetImageProps>`
  background-image: ${(props) =>
    `url(${require(`../../common/assets/destination/image-${props.planet}.png`)})`};

  background-size: cover;
  background-position: center;
  box-sizing: border-box;

  min-height: 500px;
  min-width: 500px;
`;
