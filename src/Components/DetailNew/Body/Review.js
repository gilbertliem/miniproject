import React from "react";
import kaka from "../../../Images/ricardo.png";
import Bintang from "../../../Images/bintang.png";
import "./Review.css";

// ==================== //

function Review () {

    return (
		<div>
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

export default Review;