import React from "react";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import "./Large_Orders.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

function Large_Orders() {
  return (
    <div className="lorders-page">
      <Navbar />
      <div className="lorders-img">
        <Link>
          <img src="/banner-2.jpeg"></img>
        </Link>
      </div>
      <section className="lorders-wrap">
        <div className="lorders-content">
          <form>
            <div className="form-wrap">
              <h2>RAMEIN ACARAMU BARENG BK!</h2>
              <div className="error-msg"></div>
              <h3>Pilih Paket (Minimum order 20 pax/Paket)</h3>
              <div className="product">
                <label>1pc Ayam Crispy + Nasi + Mineral Water</label>
                <input
                  type="number"
                  name="product_1"
                  placeholder="Jumlah"
                  min="20"
                  id="id_product_1"
                ></input>
              </div>
              <div className="product">
                <label>
                  2pcs Ayam Crispy/ Spicy/ Mix + Nasi + Mineral Water
                </label>
                <input
                  type="number"
                  name="product_1"
                  placeholder="Jumlah"
                  min="20"
                  id="id_product_1"
                ></input>
              </div>

              <h3>Add On (Optional)</h3>
              <div className="product">
                <label>Sliced Cheese</label>
                <input
                  type="number"
                  name="product_1"
                  placeholder="Jumlah"
                  min="0"
                  id="id_product_1"
                ></input>
              </div>
              <div className="product">
                <label>Fusion Cookies & Cream</label>
                <input
                  type="number"
                  name="product_1"
                  placeholder="Jumlah"
                  min="0"
                  id="id_product_1"
                ></input>
              </div>
            </div>

            <hr />

            <div className="form-wrap">
              <h3>Lengkapi data diri kamu!</h3>
              <div className="name-phone">
                <div className="split-name">
                  <input
                    type="text"
                    name="name"
                    placeholder="Nama"
                    required
                    id="id_address"
                  ></input>
                </div>
                <div className="split-phone">
                  <span className="code">+62</span>
                  <input
                    type="number"
                    name="mobile_number"
                    placeholder="No Handphone"
                    required
                    id="id_number"
                  ></input>
                </div>
              </div>
              <div className="email-ttl">
                <div className="split-email">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    required
                    id="id_email"
                  ></input>
                </div>
                <div className="split-ttl">
                  <input
                    type="text"
                    placeholder="Tanggal Lahir"
                    required
                    id="id_ttl"
                    className="date-input"
                    readOnly
                  ></input>
                </div>
              </div>
              <textarea
                name="address"
                cols="40"
                rows="4"
                placeholder="Alamat"
                maxLength="300"
                required
                id="id_address"
              ></textarea>

              <h3>Detail Acara!</h3>
              <input
                type="text"
                name="event"
                placeholder="Jenis Acara"
                required
                id="id_event"
                className="jenis-acara"
              ></input>
              <div className="time-date">
              <div className="split-time">
                  <select
                    name="event_time"
                    required
                    id="id_event_time"
                  >
                    <option value="" selected="">Waktu</option>
                    <option value="00:00:00">00:00</option>
                    <option value="01:00:00">01:00</option>
                    <option value="02:00:00">02:00</option>
                  </select>
                </div>
                <div className="split-date">
                  <input
                    type="text"
                    placeholder="Tanggal Acara"
                    min="2024-01-25"
                    required
                    id="id_date"
                    className="date-event-input"
                    readOnly
                  ></input>
                </div>
              </div>

              <h3>Catatan</h3>
              <textarea
                name="notes"
                cols="40"
                rows="4"
                placeholder="Tulis request/order menu lain di sini!"
                maxLength="300"
                id="id_notes"
              ></textarea>
              <button type="submit" className="lorders-button">
                SUBMIT
              </button>
            </div>
          </form>

          <div className="contact">
            <div className="contact-wrap">
              <h3 className="contact-text">Kamu juga bisa hubungi kami di:</h3>
              <a href="mailto:guestservice@burgerking.co.id" className="contact-us">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ marginRight: "5px" }}
                />
                <h3>guestservice@burgerking.co.id</h3>
              </a>
              <a href="tel:1500025" className="contact-us">
                <FontAwesomeIcon
                  icon={faPhone}
                  style={{ marginRight: "5px" }}
                />
                <h3>1500 25</h3>
              </a>
              <article>
                Harga sebelum 10% PB.1 TM & C 2023 Burger King Company LLC. Used
                under license. All rights reserved.
              </article>
            </div>
            <img src="/bk-contactus.png"></img>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Large_Orders;
