import React, { Component } from "react";
import brand from "../Images/brand.png";
import google from "../Images/google.png";
import apple from "../Images/apple.png";
import facebook from "../Images/face.png";
import pinterest from "../Images/pinterest.png";
import instagram from "../Images/insta.png";
import styles from "./Footer.module.css";

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer>
          <div className={styles.row}>
            <div className={styles.coltwo}>
              <p>About Us</p>
              <p>Blog</p>
              <p>Services</p>
              <p>Career</p>
              <p>Media</p>
            </div>
          </div>
          <p className={styles.Copy}>Copyright © 2020. All Rights Reserved</p>
        </footer>
      </>
    );
  }
}
