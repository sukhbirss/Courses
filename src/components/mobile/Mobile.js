import "./styles.css";
import Card from "../card/Card";
import menu from "./menu.png";
import cart from "./cart.png";

export default function Header() {
  return (
    <div className="mobile-container">
      <div className="header">
        <img src={menu} className="menu" />
        <h1>Lorem</h1>
        <img src={cart} className="menu" />
      </div>
      <h1>what are you having for lunch?</h1>
      <div className="cardLayout">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et
      </p>

      <hr />
    </div>
  );
}
