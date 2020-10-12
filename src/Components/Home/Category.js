import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import axios from "axios";
import styles from "./Category.module.css";
// import MovieList from "./MovieList";
import Pagination from "react-js-pagination";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HomeWrapper } from "./Category-styled";
import { noimg } from "../../Images/noimg.jpg";

function Category(props) {
  const [categories, setCategories] = useState([]);
  const [movies, setMovies] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  let [option, setOption] = useState(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    // fetchCategory();
    fetchMovies(currentPage);
  }, []);

  useEffect(() => {
    fetchMovies(currentPage);
  }, [option, currentPage]);

  const fetchMovies = () => {
    if (option === 0) {
      axios
        .get(
          `https://damp-dawn-67180.herokuapp.com/movie?page=${currentPage}`
          // `https://api.themoviedb.org/3/movie/now_playing?api_key=86ecab01572806c443d2d6f0ebec2d77&page=${page + 1}`
        )
        .then((data) => {
          setMovies(data.data.result);
          setTotalPage(data.data.total_pages);
          console.log(data);
        });
    } else {
      console.log("masuk option");
      axios
        .get(
          `https://damp-dawn-67180.herokuapp.com/movie/category?page=${currentPage}&genre=${option}`
          // `https://api.themoviedb.org/3/discover/movie?api_key=86ecab01572806c443d2d6f0ebec2d77&page=${
          //   page + 1
          // }&with_genres=${option}`
        )
        .then((data) => {
          setMovies(data.data.result);
          // setTotalPage(data.data.total_pages);
          console.log(data);
        });
    }
    console.log(movies);
  };

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
                  <>
                    <Link
                      to={"/detail/" + data.id}
                      key={data.id}
                      className={styles.card}
                    >
                      {data.poster ? (
                        <img
                          src={data.poster}
                          alt={data.title}
                          onClick={() => props.detailsHandler(data.id)}
                        />
                      ) : (
                        <img
                          src={noimg}
                          alt={data.title}
                          onClick={() => props.detailsHandler(data.id)}
                        />
                      )}
                      <div className={styles.info}>
                        <h3>{data.title}</h3>
                      </div>
                    </Link>
                  </>
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

{
  /* {data.genre.map((genre) => (
  <h5>{genre}</h5>
))} */
}

{
  /* <img
  src={
    data.poster_path
    ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
      : `https://image.tmdb.org/t/p/w500${noimg}`
    }
    alt={data.title}
    />
    <div className={styles.info}>
    <h2>{data.title}</h2>
  </div> */
}

// useEffect(() => {
// }, [movies]);

// const fetchCategory = () => {
//   axios
//     .get(
//       // `https://damp-dawn-67180.herokuapp.com/`
//       `https://api.themoviedb.org/3/genre/movie/list?api_key=86ecab01572806c443d2d6f0ebec2d77&language=en-US`
//     )
//     .then((data) => {
//       setCategories(data.data.genres);
//       console.log(data);
//     });
// };
{
  /* {categories.map((category) => {
    return (
      <NavLink to={`#`}>
      <p onClick={() => genre(category.id)}>{category.name}</p>
      </NavLink>
    );
  })} */
}

// import ReactPaginate from "react-paginate";
//         <div className={styles.paginate}>
//           <ReactPaginate
//             pageCount={1}
//             pageRangeDisplayed={5}
//             marginPagesDisplayed={1}
//             previousLabel={"< "}
//             nextLabel={" >"}
//             breakLabel={".."}
//             pageCount={totalPage}
//             onPageChange={(page) => setCurrentPage(page.selected)}
//             containerClassName={"one"}
//             pageClassName={"two"}
//             pageLinkClassName={"three"}
//             activeClassName={"four"}
//             activeLinkClassName={"five"}
//             />
//         </div>

// <Switch>
//   <Route path="/movies/:category">
//     <MovieList categories={categories} />
//   </Route>
//   <Route path="/">
//     <MovieList categories={categories} all />
//   </Route>
// </Switch>
{
  {
    /* <Router> */
  }
  /* <Link to={"/"}>
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
          </Link> */
}
{
  /* <Switch>
          <Route path="/anime" component={Anime} />
          <Route path="/action" component={Action} />
          <Route path="/adventure" component={Adventure} />
          <Route path="/science" component={Science} />
          <Route path="/comedy" component={Comedy} />
          </Switch>
        </Router> */
}
