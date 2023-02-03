import React from "react";
import { Link } from "react-router-dom";
import Carrito from "./Carrito";
import { animateScroll as scroll } from "react-scroll";
import ItemCarrito from "./ItemCarrito";


const Header = () => {
  return (
    <header>
      <Link className="logo" to="/">
        <img
          src="https://i.pinimg.com/originals/17/cd/72/17cd72c998ea51d769e73c03eb2a9005.png"
          alt="logo"
          width="150"
        />{" "}
      </Link>

      <nav>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/productos">PRODUCTOS</Link>
          </li>

          <Link
            activeClass="active"
            to="itemCarrito"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <div className="cart">
              <box-icon name="cart"></box-icon>
              <span className="item_total">{Carrito.length}</span>
            </div>{" "}
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
