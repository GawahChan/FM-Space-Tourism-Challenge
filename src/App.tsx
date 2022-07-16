import Navigation from "./components/navigation/Navigation";
import Home from "./pages/home/Home";
import Destination from "./pages/destination/Destination";
import Crew from "./pages/crew/Crew";
import Technologypage from "./pages/technology/Technology";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { theme } from "./styles/themes/Theme";

import {
  HOME_URL,
  DESTINATION_URL,
  CREW_URL,
  TECHNOLOGY_URL,
} from "./utils/Constants";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navigation />
        <Routes>
          <Route path={HOME_URL} element={<Home />} />
          <Route path={DESTINATION_URL} element={<Destination />} />
          <Route path={CREW_URL} element={<Crew />} />
          <Route path={TECHNOLOGY_URL} element={<Technologypage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
