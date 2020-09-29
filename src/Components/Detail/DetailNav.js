import React, { Component } from "react";
import brand from "../../Images/brand.png";
import kaka from "../../Images/kaka.png";
import "./DetailNav.css";

// ==================== //

export default class DetailNav extends Component {
  render() {
    return (
      <>
        <nav className="detail">
          <div className="navbar">
            <img src={brand} alt="MilanTV" />
            <h1>MilanTV</h1>
          </div>
          <form action="">
            <input type="text" placeholder="search movie" name="" id="" />
          </form>
          <div className="profile">
            <img src={kaka} alt="Profile" />
          </div>
        </nav>
      </>
    );
  }
}
