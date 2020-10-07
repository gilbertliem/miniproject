import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Anime from "./Anime";
import Action from "./Action";
import Adventure from "./Adventure";
import Science from "./Science";
import Comedy from "./Comedy";
import styles from "./Category.module.css";

function Category() {
  return (
    <>
      <Router>
        {/* <div className={styles.category}> */}
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
        {/* </div> */}
        <Switch>
          <Route path="/anime" component={Anime} />
          <Route path="/action" component={Action} />
          <Route path="/adventure" component={Adventure} />
          <Route path="/science" component={Science} />
          <Route path="/comedy" component={Comedy} />
        </Switch>
      </Router>
    </>
  );
}

export default Category;
