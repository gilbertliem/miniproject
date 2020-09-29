import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Overview.css";

// ==================== //

export default class Overview extends Component {
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
            <p className="active">Overview</p>
          </Link>
          <Link to={"/characters"}>
            <p>Characters</p>
          </Link>
          <Link to={"/review"}>
            <p>Review</p>
          </Link>
        </div>
        <div className="body">
          <div>
            <h1 className="synopsis-title">Synopsis</h1>
            <div className="synopsis">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took. Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took. Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took.
              </p>
            </div>
            <div className="list-info">
              <h1>Movie Info</h1>
              <div className="movie-info">
                <p>
                  <strong>Release date</strong> : January 5, 1998
                </p>
                <p>
                  <strong>Director</strong> : John Doe
                </p>
                <p>
                  <strong>Featured song</strong> : Pegasus fantasi
                </p>
                <p>
                  <strong>Budget</strong> : 200 million USD
                </p>
                <p>
                  <strong>Release date</strong> : January 5, 1998{" "}
                </p>
                <p>
                  <strong>Director</strong> : James Cameron
                </p>
                <p>
                  <strong>Featured song</strong> : Soldier dream
                </p>
                <p>
                  <strong>Budget</strong> : 200 million USD
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
