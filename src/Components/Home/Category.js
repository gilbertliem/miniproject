import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import styles from "./Category.module.css";
// import MovieList from "./MovieList";
import Pagination from "react-js-pagination";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./pagination.css";
import { HomeWrapper } from "./Category-styled";

function Category(props) {
  const [movies, setMovies] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);
  let [option, setOption] = useState(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (option === 0) {
      axios
        .get(`https://damp-dawn-67180.herokuapp.com/movie?page=${currentPage}`)
        .then((data) => {
          setMovies(data.data.result);
          console.log(data);
        });
    } else {
      console.log("masuk option");
      axios
        .get(
          `https://damp-dawn-67180.herokuapp.com/movie/category?page=${currentPage}&genre=${option}`
        )
        .then((data) => {
          setMovies(data.data.result);
          console.log(data);
        });
    }
    console.log(movies);
  }, [option, currentPage, movies]);

  let genre = (e) => {
    setOption(e);
    setCurrentPage = 1;
    console.log(option);
  };

  const nextpage = (pagesNumber) => {
    axios
      .get(`https://damp-dawn-67180.herokuapp.com/movie?page=${pagesNumber}`)
      .then((response) => {
        // console.log(response.data.results);
        setMovies(response.data.results);
        setCurrentPage(pagesNumber);
        setActive(pagesNumber);
        console.log(movies);
        window.scrollTo(0, 0);
      })
      .catch((err) => console.log("error"));
  };

  let settings = {
    dots: false,
    infinite: true,
    fade: false,
    autoplay: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: true,
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          arrows: true,
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 760,
        settings: {
          arrows: true,
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 580,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  // ${category.name}
  return (
    <>
      <div className={styles.category}>
        <h1>Browse by Category</h1>
        <HomeWrapper>
          <div className={styles.subcategories}>
            <Slider {...settings}>
              <NavLink to={`#`}>
                <p
                  onClick={(e) => {
                    genre(e.target.textContent);
                    // console.log(e.target.textContent);
                  }}
                >
                  Animation
                </p>
              </NavLink>
              <NavLink to={`#`}>
                <p
                  onClick={(e) => {
                    genre(e.target.textContent);
                    // console.log(e.target.textContent);
                  }}
                >
                  Adventure
                </p>
              </NavLink>
              <NavLink to={`#`}>
                <p
                  onClick={(e) => {
                    genre(e.target.textContent);
                    // console.log(e.target.textContent);
                  }}
                >
                  Comedy
                </p>
              </NavLink>
              <NavLink to={`#`}>
                <p
                  onClick={(e) => {
                    genre(e.target.textContent);
                    // console.log(e.target.textContent);
                  }}
                >
                  Family
                </p>
              </NavLink>
              <NavLink to={`#`}>
                <p
                  onClick={(e) => {
                    genre(e.target.textContent);
                    // console.log(e.target.textContent);
                  }}
                >
                  Fantasy
                </p>
              </NavLink>
              <NavLink to={`#`}>
                <p
                  onClick={(e) => {
                    genre(e.target.textContent);
                    // console.log(e.target.textContent);
                  }}
                >
                  Crime
                </p>
              </NavLink>
              <NavLink to={`#`}>
                <p
                  onClick={(e) => {
                    genre(e.target.textContent);
                    // console.log(e.target.textContent);
                  }}
                >
                  Horror
                </p>
              </NavLink>
              <NavLink to={`#`}>
                <p
                  onClick={(e) => {
                    genre(e.target.textContent);
                    // console.log(e.target.textContent);
                  }}
                >
                  Thriller
                </p>
              </NavLink>
              <NavLink to={`#`}>
                <p
                  onClick={(e) => {
                    genre(e.target.textContent);
                    // console.log(e.target.textContent);
                  }}
                >
                  Drama
                </p>
              </NavLink>
              <NavLink to={`#`}>
                <p
                  onClick={(e) => {
                    genre(e.target.textContent);
                    // console.log(e.target.textContent);
                  }}
                >
                  History
                </p>
              </NavLink>
              <NavLink to={`#`}>
                <p
                  onClick={(e) => {
                    genre(e.target.textContent);
                    // console.log(e.target.textContent);
                  }}
                >
                  Romance
                </p>
              </NavLink>
              <NavLink to={`#`}>
                <p
                  onClick={(e) => {
                    genre(e.target.textContent);
                    // console.log(e.target.textContent);
                  }}
                >
                  Sci-Fi
                </p>
              </NavLink>
            </Slider>
          </div>
        </HomeWrapper>
        <div className={styles.bodies}>
          {movies?.length > 0
            ? movies.map((data) => {
                return (
                  <div key={data.id} className={styles.card}>
                    <Link
                      to={"/detail/" + data.id}
                      className={styles.card}
                      onClick={() => props.detailsHandler(data.id)}
                    >
                      {data.poster ? (
                        <img src={data.poster} alt={data.title} />
                      ) : (
                        <div className={styles.noimage}>No Image</div>
                      )}
                      <div className={styles.info}>
                        <div className={styles.titlegenre}>
                          <h3>{data.title}</h3>
                          <h6>{data.genre}</h6>
                        </div>
                        <span className={styles.genre}>{data.rate}</span>
                      </div>
                    </Link>
                  </div>
                );
              })
            : "Movie is not available."}
        </div>
        <Pagination
          className={styles.pagination}
          activePage={active}
          itemsCountPerPage={10}
          totalItemsCount={120}
          pageRangeDisplayed={5}
          onChange={(pagesNumber) => {
            nextpage(pagesNumber);
            console.log("test");
          }}
        />
      </div>
    </>
  );
}

export default Category;
