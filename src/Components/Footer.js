import React, { Component } from "react";
import brand from "../Images/brand.png";
import google from "../Images/google.png";
import apple from "../Images/apple.png";
import facebook from "../Images/face.png";
import pinterest from "../Images/pinterest.png";
import instagram from "../Images/insta.png";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer>
          <div className="row">
            <div className="col-one">
              <div className="name">
                <img src={brand} alt="" />
                <h1>MilanTV</h1>
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the <br /> printing and
                typesetting industry. Lorem Ipsum <br /> has been the industry's
                standard.printing and <br /> typesetting industry. Lorem Ipsum
                has been the <br /> industry's standard
              </p>
            </div>
            <div className="col-two">
              <p>Tentang kami</p>
              <p>Blog</p>
              <p>Layanan</p>
              <p>Karir</p>
              <p>Pusat Media</p>
            </div>
            <div className="col-three">
              <h5>Download</h5>
              <div className="store">
                <img src={google} alt="Google Store" />
                <img src={apple} alt="Apple Store" />
              </div>
              <h5>Social Media</h5>
              <div className="media">
                <img src={facebook} alt="Facebook" className="face" />
                <img src={pinterest} alt="Pinterest" />
                <img src={instagram} alt="Instagram" />
              </div>
            </div>
          </div>
          <p>Copyright © 2000-202 MilanTV. All Rights Reserved</p>
        </footer>
      </>
    );
  }
}
