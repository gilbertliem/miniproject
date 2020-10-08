import React, { useState, useEffect } from "react";
// import React, { Component } from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import styles from "./Anime.module.css";

// ==================== //

function Anime() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

  useEffect(() => {
    fetchItem();
  });

  const fetchItem = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=86ecab01572806c443d2d6f0ebec2d77"
      )
      .then((data) => {
        setMovies({ movies: data.results });
        console.log(data);
        // console.log(this.state.movies);
        // this.setState({ loading: false });
      });
  };

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentMovies = movies.slice(firstPostIndex, lastPostIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(movies.length / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className={styles.category}>
        <h1>Browse by Category</h1>
        <div className={styles.subcategories}>
          <Link to={"/"}>
            <p>All</p>
          </Link>
          <Link to={"/category/anime"}>
            <p className={styles.active}>anime</p>
          </Link>
          <Link to={"/category/action"}>
            <p>action</p>
          </Link>
          <Link to={"/category/adventure"}>
            <p>adventure</p>
          </Link>
          <Link to={"/category/science"}>
            <p>science fiction</p>
          </Link>
          <Link to={"/category/comedy"}>
            <p>comedy</p>
          </Link>
        </div>
        <div>
          <div className={styles.bodies}>
            {currentMovies.length > 0
              ? currentMovies.map((data) => {
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
          <div>
            <ul>
              {pageNumbers.map((number) => {
                <li key={number}>
                  <a href="!#" onClick={() => paginate(number)}>
                    {number}
                  </a>
                </li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Anime;

// export default class Anime extends Component {
//   state = {
//     movies: [],
//     currentPage: 1,
//     postPerPage: 10,
//   };
//   // FUNCTION
//   componentDidMount() {
//     this.fetchItem();
//   }

//   fetchItem = () => {
//     fetch(
//       "https://api.themoviedb.org/3/movie/now_playing?api_key=86ecab01572806c443d2d6f0ebec2d77"
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         this.setState({ movies: data.results });
//         console.log(data);
//         // console.log(this.state.movies);
//         // this.setState({ loading: false });
//       });
//   };

//   // RENDER
//   render() {
//     return (
//       <>
//         <div className={styles.category}>
//           <h1>Browse by Category</h1>
//           <div className={styles.subcategories}>
//             <Link to={"/"}>
//               <p>All</p>
//             </Link>
//             <Link to={"/category/anime"}>
//               <p className={styles.active}>anime</p>
//             </Link>
//             <Link to={"/category/action"}>
//               <p>action</p>
//             </Link>
//             <Link to={"/category/adventure"}>
//               <p>adventure</p>
//             </Link>
//             <Link to={"/category/science"}>
//               <p>science fiction</p>
//             </Link>
//             <Link to={"/category/comedy"}>
//               <p>comedy</p>
//             </Link>
//           </div>
//           <div className={styles.bodies}>
//             {this.state.movies.length > 0
//               ? this.state.movies.map((data) => {
//                   return (
//                     <Link to="/detail" key={data.id} className={styles.card}>
//                       <img
//                         src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
//                         alt={data.title}
//                       />
//                       <div className={styles.info}>
//                         <h2>Title</h2>
//                         <h4>Genre</h4>
//                       </div>
//                     </Link>
//                   );
//                 })
//               : "Movie is not available."}
//           </div>
//         </div>
//       </>
//     );
//   }
// }
