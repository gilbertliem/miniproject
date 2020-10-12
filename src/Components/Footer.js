import React, { Component } from "react";
import brand from "../Images/netflixxx.png";
import styles from "./Footer.module.css";

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer>
        	<div className={styles.row}>
				<img src={brand} alt="logo" width="140px" height="105px"></img>
			</div>
            <div className={styles.coltwo}>
              <p>About Us</p>
              <p>Blog</p>
              <p>Services</p>
              <p>Career</p>
              <p>Media</p>
            </div>
          	<div>
          		<p className={styles.Copy}>Copyright © 2020. All Rights Reserved</p>
			</div>
        </footer>
      </>
    );
  }
}
