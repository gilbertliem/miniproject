import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Comedy.css";

// ==================== //

export default class Comedy extends Component {
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
        <h1>Browse by Category</h1>
        <div className="sub-categories">
          <Link to={"/"}>
            <p>All</p>
          </Link>
          <Link to={"/anime"}>
            <p>anime</p>
          </Link>
          <Link to={"/action"}>
            <p>action</p>
          </Link>
          <Link to={"/adventure"}>
            <p>adventure</p>
          </Link>
          <Link to={"/science"}>
            <p>science fiction</p>
          </Link>
          <Link to={"/comedy"}>
            <p className="active">comedy</p>
          </Link>
        </div>
        <div className="body">
          {this.state.movies.length > 0
            ? this.state.movies.map((data) => (
                <Link to={"/"} key={data.id} className="card">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                    alt={data.title}
                  />
                  <div className="info">
                    <h1>Title</h1>
                    <h4>Genre</h4>
                  </div>
                </Link>
              ))
            : "Movie is not available."}
        </div>
      </div>
    );
  }
}
