import react from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { BookingScreen } from "./Pages/BookingScreen";

function App() {
  return (
    <div className="App">
      <Header />
      <BookingScreen />
    </div>
  );
}

export default App;
