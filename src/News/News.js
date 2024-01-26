import React from "react";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import "./News.css";
import { Link } from "react-router-dom";

function News() {
  return (
    <div className="news-page">
      <Navbar />
      <section className="news-wrap">
        <div className="img-wrap">
          <Link>
            <img src="/burger-king-news.jpeg"></img>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default News;
