import {
  DestinationPageBodyContainer,
  DestinationPageContainer,
  DestinationPageHeaderNumber,
  DestinationPageImageHeader,
  DestinationPageImageHeaderContainer,
  DestinationPageImageSection,
  DestinationPagePlanetImage,
} from "./Destination.style";

const Destination = () => {
  return (
    <DestinationPageContainer>
      <DestinationPageBodyContainer>
        <DestinationPageImageSection>
          <DestinationPageImageHeaderContainer>
            <DestinationPageHeaderNumber>01</DestinationPageHeaderNumber>
            <DestinationPageImageHeader>
              PICK YOUR DESTINATION
            </DestinationPageImageHeader>
          </DestinationPageImageHeaderContainer>
          <DestinationPagePlanetImage planet="mars" />
        </DestinationPageImageSection>
      </DestinationPageBodyContainer>
    </DestinationPageContainer>
  );
};

export default Destination;
