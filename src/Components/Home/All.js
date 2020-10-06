import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Adventure.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HomeWrapper } from "./All-styled";

// ==================== //

export default class Adventure extends Component {
  state = {
    movies: [],
  };
  // FUNCTION
  componentDidMount() {
    this.fetchItem();
  }

  fetchItem = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=86ecab01572806c443d2d6f0ebec2d77"
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ movies: data.results });
        console.log(data);
        // console.log(this.state.movies);
        this.setState({ loading: false });
      });
  };

  // RENDER
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      arrows: true,
      responsive: [
        {
          breakpoint: 700,
          settings: {
            arrows: true,
            slidesToShow: 3,
          },
        },
      ],
    };

    return (
      <div className="category">
        <h1>Browse by Category</h1>
        <h3>All</h3>
        <HomeWrapper>
          <div className="">
            <Slider {...settings}>
              {this.state.movies.map((pict) => (
                <div key={pict.id} className="card-col">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${pict.poster_path}`}
                    alt={pict.title}
                  />
                  <h3>{pict.title}</h3>
                </div>
              ))}
            </Slider>
          </div>
        </HomeWrapper>
        <h3>Anime</h3>
        <div className="">
          <Slider {...settings}>
            {this.state.movies.map((pict) => (
              <div key={pict.id} className="card-col">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${pict.poster_path}`}
                  alt={pict.title}
                />
                <h3>{pict.title}</h3>
              </div>
            ))}
          </Slider>
          <br />
          <br />
          <br />
          {/* <div className="sub-categories">
              <Link to={"/"}>
                <p className="active">All</p>
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
                <p>comedy</p>
              </Link>
            </div> */}
          {/* <Slider {...settings}>
            <div className="app">
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
          </Slider> */}
        </div>
      </div>
    );
  }
}
