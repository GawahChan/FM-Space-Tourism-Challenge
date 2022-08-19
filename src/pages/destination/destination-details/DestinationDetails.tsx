import { useState, useEffect } from "react";
import {
  DestinationDetailsContainer,
  DetailsImageContainer,
  DetailsPlanetImage,
  DetailsInfoContainer,
  DetailsNavigationContainer,
  DetailsNavigationTab,
  DetailsHeader,
  DetailsParagraph,
} from "./DestinationDetails.style";

import Data from "../../../common/data/data.json";

const DestinationDetails = () => {
  const [planet, setPlanet] = useState("Moon");
  const [planetHeader, setPlanetHeader] = useState("");
  const [planetDescription, setPlanetDescription] = useState("");
  const [planetImage, setPlanetImage] = useState("moon");

  useEffect(() => {
    setPlanet(`${planet}`);
    setPlanetHeader(`${planet}`);
    setPlanetDescription(`${planet} description`);
    setPlanetImage(planet.toLowerCase());
  }, [planet]);

  return (
    <DestinationDetailsContainer>
      <DetailsImageContainer>
        <DetailsPlanetImage planet={planetImage} />
      </DetailsImageContainer>
      <DetailsInfoContainer>
        <DetailsNavigationContainer>
          <DetailsNavigationTab>MOON</DetailsNavigationTab>
          <DetailsNavigationTab>MARS</DetailsNavigationTab>
          <DetailsNavigationTab>EUROPA</DetailsNavigationTab>
          <DetailsNavigationTab>TITAN</DetailsNavigationTab>
        </DetailsNavigationContainer>
        <DetailsHeader>{planetHeader}</DetailsHeader>
        <DetailsParagraph>{planetDescription}</DetailsParagraph>
      </DetailsInfoContainer>
    </DestinationDetailsContainer>
  );
};

export default DestinationDetails;
