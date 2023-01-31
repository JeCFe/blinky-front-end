import react from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import DeskPage from "./Pages/DeskPage";
import { DeskOrganisation } from "./Pages/DeskOrganisation";
import { LoginScreen } from "./Pages/LoginScreen";
import { Footer } from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <div className="container">
          <Routes>
            <Route path="/" element={<LoginScreen />} />
            <Route path="/booking/:activeUser" element={<DeskPage />} />
            <Route path="/organisation" element={<DeskOrganisation />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
