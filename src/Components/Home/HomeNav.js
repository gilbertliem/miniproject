import React, { Component } from "react";
import brand from "../../Images/brand.png";
import "./HomeNav.css";

// ==================== //

export default class HomeNav extends Component {
  render() {
    return (
      <>
        <nav className="homenav">
          <div className="navbar">
            <img src={brand} alt="" />
            <h1>MilanTV</h1>
          </div>
          <form action="">
            <input type="text" placeholder="search movie" name="" id="" />
          </form>
          <div className="profile">
            <h3>Sign up</h3>
          </div>
        </nav>
      </>
    );
  }
}
