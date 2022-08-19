import DestinationDetails from "./destination-details/DestinationDetails";
import {
  DestinationBodyContainer,
  DestinationPageContainer,
  DestinationHeaderNumber,
  DestinationHeader,
  DestinationHeaderContainer,
} from "./Destination.style";

const Destination = () => {
  return (
    <DestinationPageContainer>
      <DestinationBodyContainer>
        <DestinationHeaderContainer>
          <DestinationHeaderNumber>01</DestinationHeaderNumber>
          <DestinationHeader>PICK YOUR DESTINATION</DestinationHeader>
        </DestinationHeaderContainer>
        <DestinationDetails />
      </DestinationBodyContainer>
    </DestinationPageContainer>
  );
};

export default Destination;
