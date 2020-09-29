import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import kaka from "../../Images/ricardo.png";
import Bintang from "../../Images/bintang.png";
import "./Review.css";

// ==================== //

export default class Review extends Component {
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
            <p>Characters</p>
          </Link>
          <Link to={"/review"}>
            <p className="active">Review</p>
          </Link>
        </div>
        <div className="row-input">
          <img className="gambar" src={kaka} alt="Kaka" />
          <div className="col-input">
            <h2>Ricardo Kaka</h2>
            <img className="bintang" src={Bintang} alt="" />
            <img className="bintang" src={Bintang} alt="" />
            <img className="bintang" src={Bintang} alt="" />
            <img className="bintang" src={Bintang} alt="" />
            <img className="bintang" src={Bintang} alt="" />
            <br />
            <input
              type="text"
              placeholder="Leave a review"
              name=""
              className="input"
            />
          </div>
        </div>
        <div className="row-review">
          <img className="gambar" src={kaka} alt="Kaka" />
          <div className="komentar">
            <h2>Ricardo Kaka</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat
            </p>
          </div>
        </div>
      </div>
    );
  }
}
{
  /* <div className="row">
            <img src={kaka} alt="Kaka" />
            <div className="col">
              <p>
                <strong>Ricardo Kaka</strong>
              </p>
              <div className="star-row">
                <img className="bintang" src={Bintang} alt="" />
                <img className="bintang" src={Bintang} alt="" />
                <img className="bintang" src={Bintang} alt="" />
                <img className="bintang" src={Bintang} alt="" />
                <img className="bintang" src={Bintang} alt="" />
              </div>
              <input
                type="text"
                placeholder="Leave a review"
                name=""
                className="input"
              />
            </div>
          </div> */
}
{
  /* <div className="row-review">
            <div className="col">
              <p>
                <strong></strong>
              </p>
              
            </div>
          </div> */
}
