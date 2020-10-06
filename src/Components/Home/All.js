import React, { Component } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./All.module.css";
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
        // this.setState({ loading: false });
      });
  };

  // RENDER
  render() {
    var settings = {
      dots: true,
      infinite: true,
      // fade: true,
      // autoplay: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      arrows: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            arrows: true,
            slidesToShow: 4,
            slidesToScroll: 4,
          },
        },
        {
          breakpoint: 1000,
          settings: {
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 760,
          settings: {
            arrows: true,
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 580,
          settings: {
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div className={styles.category}>
        <h1>Browse by Category</h1>

        <div className={styles.subcategories}>
          <Link to={"/"}>
            <p className={styles.active}>All</p>
          </Link>
          <Link to={"/anime"}>
            <p>Anime</p>
          </Link>
          <Link to={"/action"}>
            <p>Action</p>
          </Link>
          <Link to={"/adventure"}>
            <p>Adventure</p>
          </Link>
          <Link to={"/science"}>
            <p>Science Fiction</p>
          </Link>
          <Link to={"/comedy"}>
            <p>Comedy</p>
          </Link>
        </div>

        <h3>All</h3>
        <HomeWrapper>
          <div>
            <Slider {...settings}>
              {this.state.movies.map((pict) => (
                <Link to={"/detail"} key={pict.id}>
                  <div key={pict.id} className={styles.cardcol}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${pict.poster_path}`}
                      alt={pict.title}
                    />
                    <h3>{pict.title}</h3>
                  </div>
                </Link>
              ))}
            </Slider>
          </div>
        </HomeWrapper>
        <br />
        <br />
        <h3>Anime</h3>
        <HomeWrapper>
          <div>
            <Slider {...settings}>
              {this.state.movies.map((pict) => (
                <Link to={"/detail"} key={pict.id}>
                  <div key={pict.id} className={styles.cardcol}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${pict.poster_path}`}
                      alt={pict.title}
                    />
                    <h3>{pict.title}</h3>
                  </div>
                </Link>
              ))}
            </Slider>
          </div>
        </HomeWrapper>
        <br />
      </div>
    );
  }
}

{
  /* <Slider {...settings}>
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
  </Slider> */
}
