import React from "react";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import "./Home.css";
import Slider from "../Slider/Slider";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="landing-page">
      <Navbar />
      <Slider />
      <div className="title-home">
        <h2>Our Menus</h2>
      </div>
      <section className="card-wrap">
        <Link to="/menus" className="menu-home">
          <img src="menu-1.jpeg"></img>
          <div className="menu-name">
            <h3>BK APP EXCLUSIVE</h3>
            <button>Order</button>
          </div>
        </Link>
        <Link to="/menus" className="menu-home">
          <img src="menu-1.jpeg"></img>
          <div className="menu-name">
            <h3>NEW! Cheese Dunk [Limited Time Offer]</h3>
            <button>Order</button>
          </div>
        </Link>
        <Link to="/menus" className="menu-home">
          <img src="menu-1.jpeg"></img>
          <div className="menu-name">
            <h3>BK APP EXCLUSIVE</h3>
            <button>Order</button>
          </div>
        </Link>
        <Link to="/menus" className="menu-home">
          <img src="menu-1.jpeg"></img>
          <div className="menu-name">
            <h3>NEW! Cheese Dunk [Limited Time Offer]</h3>
            <button>Order</button>
          </div>
        </Link>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
