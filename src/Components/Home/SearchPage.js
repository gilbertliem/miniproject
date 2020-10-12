import React, { Component } from "react";

import Head from "./Head";
import { NavLink } from "react-router-dom";
import styles from "./SearchPage.module.css";

// import Head from "./Head";

// ==================== //

export default class SearchPage extends Component {
  // RENDER
  render() {
    return (
      <>
        <Head searchHandler={this.props.searchHandler} />
        <div className={styles.category}>
          <h1>Search for: "{this.props.input}"</h1>
          <div className={styles.bodies}>
            {this.props.search?.length > 0
              ? this.props.search.map((data) => {
                  return (
                    <NavLink
                      to={"/detail/" + data.id}
                      key={data.id}
                      className={styles.card}
                      onClick={() => this.props.detailsHandler(data.id)}
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
