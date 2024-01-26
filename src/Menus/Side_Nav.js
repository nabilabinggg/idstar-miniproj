import React from "react";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import "./Menus.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Side_Nav() {
  return (
    <div className="left">
      <form>
        <div className="search">
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Search menu..."
          ></input>
          <div className="search-wrap">
            <button type="submit" className="search-button">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>
      </form>
      <div className="categories">
        <Link to="" className="button-categories">
          <button>BK App Exclusive</button>
        </Link>
        <Link to="" className="button-categories">
          <button>New! Cheese Dunk [Limited Time Offer]</button>
        </Link>
        <Link to="" className="button-categories">
          <button>Promo Hari Ini</button>
        </Link>
        <Link to="" className="button-categories">
          <button>BK App Exclusive</button>
        </Link>
      </div>
      <span className="pajak">* Harga belum termasuk pajak</span>
    </div>
  );
}

export default Side_Nav;
