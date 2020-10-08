import React, { Component } from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import styles from "./Anime.module.css";
import Pagination from "react-pagination-js";
import "react-pagination-js/dist/styles.css";

// ==================== //

export default class Anime extends Component {
  state = {
    movies: [],
    currentPage: 1,
    activePage: 1,
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

  changeCurrentPage = (numPage) => {
    this.setState({ currentPage: numPage });
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=86ecab01572806c443d2d6f0ebec2d77&language=en-US&page=" +
          numPage
      )
      .then((response) => {
        console.log(response.data.results);
        this.setState({
          movies: response.data.results,
          currentPage: numPage,
          activePage: numPage,
        });
        console.log(this.state.movies);
        window.scrollTo(0, 0);
      });
  };

  // RENDER
  render() {
    return (
      <>
        <div className={styles.category}>
          <h1>Browse by Category</h1>
          <div className={styles.subcategories}>
            <Link to={"/"}>
              <p>All</p>
            </Link>
            <Link to={"/anime"}>
              <p className={styles.active}>anime</p>
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
          </div>
          <div className={styles.bodies}>
            {this.state.movies.length > 0
              ? this.state.movies.map((data) => {
                  return (
                    <Link to="/detail" key={data.id} className={styles.card}>
                      <img
                        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                        alt={data.title}
                      />
                      <div className={styles.info}>
                        <h2>Title</h2>
                        <h4>Genre</h4>
                      </div>
                    </Link>
                  );
                })
              : "Movie is not available."}
          </div>
          <Pagination
            currentPage={this.state.currentPage}
            totalPages={10}
            theme={"dark"}
            changeCurrentPage={this.changeCurrentPage}
            // className="pagination"
            // activePage={this.state.activePage}
            // itemsCountPerPage={20}
            // totalItemsCount={10000}
            // pageRangeDisplayed={5}
            // onChange={this.nextpage.bind(this)}
          />
        </div>
      </>
    );
  }
}
