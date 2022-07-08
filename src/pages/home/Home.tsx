import { DESTINATION_URL } from "../../utils/Constants";
import {
  HomeNavLink,
  HomePageBodyContainer,
  HomePageButtonContainer,
  HomePageContainer,
  HomePageHeader,
  HomePageParagraph,
  HomePageSubHeader,
  HomePageTextContainer,
} from "./Home.style";

const Home = () => {
  return (
    <HomePageContainer>
      <HomePageBodyContainer>
        <HomePageTextContainer>
          <HomePageSubHeader>SO, YOU WANT TO TRAVEL TO</HomePageSubHeader>
          <HomePageHeader>SPACE</HomePageHeader>
          <HomePageParagraph>
            Let’s face it; if you want to go to space, you might as well
          </HomePageParagraph>
          <HomePageParagraph>
            genuinely go to outer space and not hover kind of on the edge of it.
          </HomePageParagraph>
          <HomePageParagraph>
            Well sit back, and relax because we’ll give you a truly out of this
          </HomePageParagraph>
          <HomePageParagraph>world experience!</HomePageParagraph>
        </HomePageTextContainer>
        <HomeNavLink to={DESTINATION_URL}>
          <HomePageButtonContainer>EXPLORE</HomePageButtonContainer>
        </HomeNavLink>
      </HomePageBodyContainer>
    </HomePageContainer>
  );
};

export default Home;
