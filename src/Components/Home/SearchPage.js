import React, { Component } from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import styles from "./SearchPage.module.css";
import queryString from "query-string";
// import Head from "./Head";

// ==================== //

export default class SearchPage extends Component {
  state = {
    movies: [],
    param: "",
  };

  componentDidMount() {
    this.parseParam();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.search !== this.props.location.search) {
      this.parseParam();
    }
  }

  parseParam = () => {
    const { location } = this.props;
    const query = queryString.parse(location.search);
    this.setState(
      {
        param: query.param,
      },
      () => {
        this.searchHandler(this.state.param);
      }
    );
  };

  searchHandler = (keyWords) => {
    this.setState({ movies: [] });
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=86ecab01572806c443d2d6f0ebec2d77&query=${keyWords}`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ movies: data.results });
        // console.log(data);
        // console.log(this.state.movies);
      });
  };

  // RENDER
  render() {
    const { param } = this.state;
    return (
      <>
        <div className={styles.category}>
          <h1>Search for: "{param}"</h1>
          <div className={styles.bodies}>
            {this.state.movies.length > 0
              ? this.state.movies.map((data) => {
                  return (
                    <NavLink to="/detail" key={data.id} className={styles.card}>
                      {data.poster_path ? (
                        <img
                          src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                          alt={data.title}
                        />
                      ) : (
                        <div className={styles.noimage}>No Image</div>
                      )}
                      <div className={styles.info}>
                        <h1>Title</h1>
                        <h4>Genre</h4>
                      </div>
                    </NavLink>
                  );
                })
              : "Movie is not available."}
          </div>
        </div>
      </>
    );
  }
}

// fetchItem = () => {
//   fetch(
//     "https://api.themoviedb.org/3/movie/now_playing?api_key=86ecab01572806c443d2d6f0ebec2d77"
//   )
//     .then((res) => res.json())
//     .then((data) => {
//       this.setState({ movies: data.results });
//       console.log(data);
//       // console.log(this.state.movies);
//       // this.setState({ loading: false });
//     });
// };

{
  /* <Head /> */
}
{
  /* <div className={styles.subcategories}>
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
      <p className={styles.active}>comedy</p>
    </Link>
  </div> */
}
