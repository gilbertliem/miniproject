import React, { Component } from "react";

import Head from "./Head";
import { NavLink } from "react-router-dom";
import styles from "./SearchPage.module.css";


import { noimg } from "../../Images/noimg.jpg";
// import Head from "./Head";

// ==================== //

export default class SearchPage extends Component {  
  

  // RENDER
  render() {

    return (
      <>
		<Head searchHandler={this.props.searchHandler}/>
        <div className={styles.category}>
          <h1>Search for: "{this.props.input}"</h1>
          <div className={styles.bodies}>
            {this.props.search?.length > 0
              ? this.props.search.map((data) => {
                  return (
                    <NavLink to={"/detail/" + data.id} key={data.id} className={styles.card}>
                      <img
                        src={data.poster ? data.poster : { noimg }}
                        alt={data.title}
                        onClick={() => this.props.detailsHandler(data.id)}
                      />
                      <div className={styles.info}>
                        <h3>{data.title}</h3>
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
