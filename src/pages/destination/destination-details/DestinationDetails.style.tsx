import styled from "styled-components";
import { Heading1 } from "../../../styles/typography/headers.style";
import { subHeading2 } from "../../../styles/typography/subheaders.style";

export const DestinationDetailsContainer = styled.div`
  display: flex;
`;

export const DetailsImageContainer = styled.div`
  padding: 10px;
  height: 500px;
  width: 500px;
`;

interface DestinationPlanetImageProps {
  readonly planet: String;
}

export const DetailsPlanetImage = styled.div<DestinationPlanetImageProps>`
  background-image: ${(props) =>
    `url(${require(`../../../common/assets/destination/image-${props.planet}.png`)})`};

  background-size: cover;
  background-position: center;
  box-sizing: border-box;

  min-height: 500px;
  min-width: 500px;
`;

export const DetailsInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DetailsNavigationContainer = styled.div`
  display: flex;
`;

export const DetailsNavigationTab = styled(subHeading2)`
  color: ${({ theme }) => theme.colours.navText};
  padding: 10px;
`;

export const DetailsHeader = styled(Heading1)`
  color: ${({ theme }) => theme.colours.heading};
  margin: 0;
`;

export const DetailsParagraph = styled(subHeading2)`
  color: ${({ theme }) => theme.colours.subHeading};
`;
