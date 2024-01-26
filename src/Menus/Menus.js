import React from "react";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import "./Menus.css";
import { Link } from "react-router-dom";
import Side_Nav from "./Side_Nav";

function Menus() {
  return (
    <div className="menus">
      <Navbar />
      <section className="menu-wrap">
        <Side_Nav />
        <div className="right">
        <Link to="/products" className="list-menu">
            <img src="/menu-1.jpeg"></img>
            <div className="menu-title">
              <h4>App Exc Ayam + Nasi</h4>
              <div className="price">
                <span className="discount">Rp. 15,455</span>
                <span className="original">28,636</span>
              </div>
            </div>
          </Link>
          <Link to="/products" className="list-menu">
            <img src="/menu-1.jpeg"></img>
            <div className="menu-title">
              <h4>App Exc Ayam + Nasi</h4>
              <div className="price">
                <span className="discount">Rp. 15,455</span>
                <span className="original">28,636</span>
              </div>
            </div>
          </Link>
          <Link to="/products" className="list-menu">
            <img src="/menu-1.jpeg"></img>
            <div className="menu-title">
              <h4>App Exc Ayam + Nasi</h4>
              <div className="price">
                <span className="discount">Rp. 15,455</span>
                <span className="original">28,636</span>
              </div>
            </div>
          </Link>
          <Link to="/products" className="list-menu">
            <img src="/menu-1.jpeg"></img>
            <div className="menu-title">
              <h4>App Exc Ayam + Nasi</h4>
              <div className="price">
                <span className="discount">Rp. 15,455</span>
                <span className="original">28,636</span>
              </div>
            </div>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Menus;
