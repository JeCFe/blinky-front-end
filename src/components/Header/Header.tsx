import SimpsonLogo from "../../Assets/Header.png";
import "./Header.css";

export const Header = () => {
  return (
    <header className="App-header">
      <img src={SimpsonLogo} className="App-logo" alt="logo" />
    </header>
  );
};
