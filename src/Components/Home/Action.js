import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import styles from "./Action.module.css";
import ReactPaginate from "react-paginate";
// import Head from "./Head";

// ==================== //

function Action() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0)

  useEffect(() => {
    fetchItem(currentPage);
  }, [currentPage]);

  const fetchItem = (page) => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=86ecab01572806c443d2d6f0ebec2d77&page=${page+1}&with_genres=28`
      )
      .then((data) => {
        setMovies(data.data.results);
        setTotalPage(data.data.total_pages)
        // console.log(data);
      });
  };

  return (
      <>
        {/* <Head /> */}
        <div className={styles.category}>
          <h1>Browse by Category</h1>
          <div className={styles.subcategories}>
            <Link to={"/"}>
              <p>All</p>
            </Link>
            <Link to={"/category/anime"}>
              <p>anime</p>
            </Link>
            <Link to={"/category/action"}>
              <p className={styles.active}>action</p>
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
          <div className={styles.bodies}>
            {movies?.length > 0
              ? movies.map((data) => {
                  return (
                    <NavLink to="/detail" key={data.id} className={styles.card}>
                      <img
                        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                        alt={data.title}
                      />
                      <div className={styles.info}>
                        <h1>{data.original_title}</h1>
                        <h4>Genre</h4>
                      </div>
                    </NavLink>
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
          breakLabel={'..'} 
          pageCount={totalPage} 
          onPageChange={page=>setCurrentPage(page.selected)} 
          containerClassName={'one'} 
          pageClassName={'two'} 
          pageLinkClassName={'three'} 
          activeClassName={'four'} 
          activeLinkClassName={'five'}
          />
      </div>
        </div>
      </>
  )
}

export default Action


// import React, { Component } from "react";
// export default class Action extends Component {
  //   state = {
    //     movies: [],
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
//         {/* <Head /> */}
//         <div className={styles.category}>
//           <h1>Browse by Category</h1>
//           <div className={styles.subcategories}>
//             <Link to={"/"}>
//               <p>All</p>
//             </Link>
//             <Link to={"/category/anime"}>
//               <p>anime</p>
//             </Link>
//             <Link to={"/category/action"}>
//               <p className={styles.active}>action</p>
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
//                     <NavLink to="/detail" key={data.id} className={styles.card}>
//                       <img
//                         src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
//                         alt={data.title}
//                       />
//                       <div className={styles.info}>
//                         <h1>Title</h1>
//                         <h4>Genre</h4>
//                       </div>
//                     </NavLink>
//                   );
//                 })
//               : "Movie is not available."}
//           </div>
//         </div>
//       </>
//     );
//   }
// }
