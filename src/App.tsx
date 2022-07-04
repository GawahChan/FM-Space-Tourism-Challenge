import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Crewpage from "./pages/crewpage/Crewpage";
import Destinationpage from "./pages/destinationpage/Destinationpage";
import HomePage from "./pages/homepage/Homepage";
import Technologypage from "./pages/technologypage/Technologypage";
import NavBar from "./components/navBar/NavBar";

import {
  HOME_URL,
  DESTINATION_URL,
  CREW_URL,
  TECHNOLOGY_URL,
} from "./utils/Constants";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path={HOME_URL} element={<HomePage />} />
        <Route path={DESTINATION_URL} element={<Destinationpage />} />
        <Route path={CREW_URL} element={<Crewpage />} />
        <Route path={TECHNOLOGY_URL} element={<Technologypage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
