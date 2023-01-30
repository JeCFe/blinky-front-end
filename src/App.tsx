import react from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import DeskPage from "./Pages/DeskPage";
import { DeskOrganisation } from "./Pages/DeskOrganisation";
import { LoginScreen } from "./Pages/LoginScreen";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/booking/:activeUser" element={<DeskPage />} />
        <Route path="/organisation" element={<DeskOrganisation />} />
      </Routes>
    </div>
  );
}

export default App;
