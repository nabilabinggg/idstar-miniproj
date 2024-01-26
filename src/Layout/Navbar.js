import React, { useState } from "react";
import "./Layout.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const showCart = () => {
    setShow(true);
  };

  const hideCart = () => {
    setShow(false);
  };
  return (
    <nav>
      <div className="website">
        <Link to="/" className="logo">
          <img src="/bk-logo.png"></img>
        </Link>
        <div className="left-nav">
          <div className="group-title">
            <Link to="/menus">
              <span className="subtitle">Delivery</span>
              <span className="title-nav">Order</span>
            </Link>
          </div>
          <div className="group-title">
            <Link to="/news-v1">
              <span className="subtitle">Get Fresh</span>
              <span className="title-nav">Promotions</span>
            </Link>
          </div>
          <div className="group-title">
            <Link to="/large-orders/create">
              <span className="subtitle">Exclusive</span>
              <span className="title-nav">Large Order</span>
            </Link>
          </div>
        </div>

        <div className="right-nav">
          <div className="group">
            <div className="login">
              <Link to="/accounts/login">LOGIN</Link>
            </div>
          </div>
          <div>
            <a
              href=""
              className="cart"
              onMouseEnter={showCart}
              onMouseLeave={hideCart}
            >
              <span className="badge">0</span>
              <FontAwesomeIcon icon={faCartShopping} className="icon" />
            </a>
            <div className={`cart-list ${show ? "" : "invisible"}`}>
              <span className="triangle"></span>
              <div className="loading-cart hide">
                <img src="/menu-1.jpeg"></img>
              </div>
              <p className="cart-error hide">
                Cart is temporarily unavailable.
              </p>
              <div className="cart-content-data">
                <div className="card-content-data-wrapper">
                  <table className="table-floating">
                    <tbody>
                      <tr>
                        <td><img src="/menu-1.jpeg" className="img-cart"></img></td>
                        <td className="cart-list-description">App Exc 1pc Ayam + Nasi</td>
                        <td>x 1 </td>
                        <td align="right">Rp. 15.452</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="subtotal">
                    <div className="text">
                      <span>SUBTOTAL</span>
                    </div>
                    <div className="total">Rp. 15.452</div>
                  </div>
                  <a href="/cart/preview" className="button button-order-now">
                    Go To Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
