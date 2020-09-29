import React, { Component } from "react";
import Star from "../../Images/star.png";
import Bintang from "../../Images/bintang.png";
import "./CoverDetail.css";

export default class CoverDetail extends Component {
  render() {
    return (
      <div className="cover">
        <div className="shadow">
          <div className="info">
            <form action="">
              <h1>SAINT SEIYA</h1>
              <div className="reviews">
                <img className="rating-cover" src={Star} alt="rating" />
                <img className="rating-cover" src={Star} alt="rating" />
                <img className="rating-cover" src={Star} alt="rating" />
                <img className="rating-cover" src={Star} alt="rating" />
                <img className="rating-cover" src={Bintang} alt="" />
                <p>2200 reviews</p>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqu
              </p>
              <div>
                <button>Watch Trailer</button>
                <button>Add to Watchlish</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
