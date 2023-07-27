import { DESTINATION_URL } from "../../utils/Constants";
import {
  HomeNavLink,
  HomePageContainer,
  HomePageHeader,
  HomePageParagraph,
  HomePageSubHeader,
  HomePageTextContainer,
  HomePageButtonContainer
} from "./Home.style";

const Home = () => {
  return (
    <HomePageContainer>
      <HomePageTextContainer>
        <HomePageSubHeader>SO, YOU WANT TO TRAVEL TO</HomePageSubHeader>
        <HomePageHeader>SPACE</HomePageHeader>
        <HomePageParagraph>
          Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
        </HomePageParagraph>
      </HomePageTextContainer>
      <HomePageButtonContainer>
        <HomeNavLink to={DESTINATION_URL}>
          EXPLORE
        </HomeNavLink>
      </HomePageButtonContainer>
    </HomePageContainer>
  );
};

export default Home;
