<<<<<<< HEAD
import React, {Component} from 'react';
import Navbar from '../DetailNew/Head/NavDetail';
import Particle from './Particle';
import SearchFilm from './SearchFilm';
import Logo from './Logo';
=======
import React, { Component } from "react";
import Navbar from "./navbar";
import Particle from "./Particle";
import SearchFilm from "./SearchFilm";
import Logo from "./Logo";
>>>>>>> a825108f7e1115eccc77d84a3fdf156e9b40fcec

import styles from "./Home.module.css";

class Head extends Component {
  render() {
    return (
      <div className={styles.Container}>
        <Navbar />
        <Logo />
        <Particle />
        <SearchFilm />
      </div>
    );
  }
}

export default Head;
