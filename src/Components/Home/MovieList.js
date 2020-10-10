import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import axios from "axios";
import styles from "./MovieList.module.css";
import ReactPaginate from "react-paginate";
import { noimg } from "../../Images/noimg.jpg";

function MovieList({ categories, all }) {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    fetchMovies(currentPage);
  }, [currentPage]);

  const fetchMovies = ({ page, categories }) => {
    if (all) {
      axios
        .get(
          `https://damp-dawn-67180.herokuapp.com/movie?page=1`
          // `https://api.themoviedb.org/3/movie/now_playing?api_key=86ecab01572806c443d2d6f0ebec2d77&page=${
          //   page + 1
          // }`
        )
        .then((data) => {
          setMovies(data.data.results);
          setTotalPage(data.data.total_pages);
          console.log(data);
        });
    } else {
      axios
        .get
        // `https://api.themoviedb.org/3/discover/movie?api_key=86ecab01572806c443d2d6f0ebec2d77&page=${page}&with_genres=${categories}`
        ()
        .then((data) => {
          setMovies(data.data.results);
          setTotalPage(data.data.total_pages);
          console.log(data);
        });
    }
  };

  return (
    <>
      <div className={styles.bodies}>
        {movies?.length > 0
          ? movies.map((data) => {
              return (
                <>
                  <Link to="/detail" key={data.id} className={styles.card}>
                    <img
                      src={data.poster ? data.poster : { noimg }}
                      alt={data.title}
                    />
                    <div className={styles.info}>
                      <h2>{data.title}</h2>
                    </div>
                    {/* {data.genre.map((genre) => (
                        <span>{genre}</span>
                      ))} */}
                    {/* <h4>Genre</h4> */}
                  </Link>
                </>
              );
            })
          : "Movie is not available."}
      </div>
      <div className={styles.paginate}>
        <ReactPaginate
          pageCount={1}
          pageRangeDisplayed={5}
          marginPagesDisplayed={1}
          previousLabel={"< "}
          nextLabel={" >"}
          breakLabel={".."}
          pageCount={totalPage}
          onPageChange={(page) => setCurrentPage(page.selected)}
          containerClassName={"one"}
          pageClassName={"two"}
          pageLinkClassName={"three"}
          activeClassName={"four"}
          activeLinkClassName={"five"}
        />
      </div>
    </>
  );
}

export default MovieList;
