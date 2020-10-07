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
            {/* <div className={styles.colthree}>
              <h5>Download</h5>
              <div className={styles.store}>
                <img src={google} alt="Google Store" />
                <img src={apple} alt="Apple Store" />
              </div>
              <h5>Social Media</h5>
              <div className={styles.media}>
                <img src={facebook} alt="Facebook" className={styles.face} />
                <img src={pinterest} alt="Pinterest" />
                <img src={instagram} alt="Instagram" />
              </div>
            </div> */}
          </div>
          <p>Copyright © 2020. All Rights Reserved</p>
        </footer>
      </>
    );
  }
}
