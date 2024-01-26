import React from "react";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import "./Product.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import Side_Nav from "../Menus/Side_Nav";

function Product() {
  return (
    <div className="products">
      <Navbar />
      <section className="product-wrap">
        <Side_Nav />
        <div className="card">
          <div className="card-product-left">
            <h1>App Exc Ayam + Nasi</h1>
            <div className="prod-desc">1pc Ayam + Nasi</div>
            <img src="/menu-1.jpeg"></img>
          </div>
          <div className="card-product-right">
            <div className="price-prod">
              <span className="discount">Rp. 15,455</span>
              <span className="original">28,636</span>
            </div>
            <div className="quantity-wrap">
              <div className="quantity">
                <button className="button-min">-</button>
                <input
                  id="quantity-input"
                  type="text"
                  className="input-qty"
                  value="1"
                  maxlength="2"
                  disabled=""
                ></input>
                <button className="button-plus">+</button>
              </div>
            </div>
            <button
              id="add-to-cart"
              type="button"
              className="button-add-to-cart"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Product;
