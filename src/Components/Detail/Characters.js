import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import maldini from "../../Images/maldini.png";
import ricardo from "../../Images/ricardo.png";
import cenko from "../../Images/cenko.png";
import manuel from "../../Images/manuel.png";
import pirlo from "../../Images/pirlo.png";
import "./Characters.css";

// ==================== //

export default class Characters extends Component {
  state = {
    movies: [],
  };
  // FUNCTION
  componentDidMount() {
    this.fetchItem();
  }

  fetchItem = () => {};

  // RENDER
  render() {
    return (
      <div className="category">
        <div className="sub-categories">
          <Link to={"/"}>
            <p>Overview</p>
          </Link>
          <Link to={"/characters"}>
            <p className="active">Characters</p>
          </Link>
          <Link to={"/review"}>
            <p>Review</p>
          </Link>
        </div>
        <div className="body">
          <div className="card">
            <img src={maldini} alt="Paolo Maldini" />
            <div className="info">
              <span>
                <strong>Paolo Maldini</strong>
              </span>
            </div>
          </div>
          <div className="card">
            <img src={ricardo} alt="Ricardo Kaka" />
            <div className="info">
              <span>
                <strong>Ricardo Kaka</strong>
              </span>
            </div>
          </div>
          <div className="card">
            <img src={cenko} alt="Andriy Shevcenko" />
            <div className="info">
              <span>
                <strong>Andriy Shevcenko</strong>
              </span>
            </div>
          </div>
          <div className="card">
            <img src={manuel} alt="Manuel locatelli" />
            <div className="info">
              <span>
                <strong>Manuel locatelli</strong>
              </span>
            </div>
          </div>
          <div className="card">
            <img src={pirlo} alt="Andrea Pirlo" />
            <div className="info">
              <span>
                <strong>Andrea Pirlo</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
