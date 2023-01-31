import react from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import DeskPage from "./lib/Pages/DeskPage";
import { DeskOrganisation } from "./lib/Pages/DeskOrganisation";
import { LoginScreen } from "./lib/Pages/LoginScreen";
import { Header } from "./lib/components/Header/Header";
import { Footer } from "./lib/components/Footer/Footer";

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
