import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Crew from "./pages/crew/Crew";
import Destination from "./pages/destination/Destination";
import Home from "./pages/home/Home";
import Technologypage from "./pages/technology/Technology";
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
        <Route path={HOME_URL} element={<Home />} />
        <Route path={DESTINATION_URL} element={<Destination />} />
        <Route path={CREW_URL} element={<Crew />} />
        <Route path={TECHNOLOGY_URL} element={<Technologypage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
