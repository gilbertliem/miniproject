import React from "react";
import styles from "./Description.module.css";
import ReactStars from "react-stars";
import moment from "moment";

function Description(props) {
  const { detail } = props;

  return (
    <div className={styles.ContainerSlide}>
      <div className={styles.Overlay}>
        <img
          className={styles.Poster}
          src={detail.poster}
          alt={detail.title}
        ></img>
        <ul className={styles.Slideshow}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className={styles.ContainerDesc}>
        <h1>
          {detail.title}({moment(detail.realeased_date).format("YYYY")})
        </h1>
        <ReactStars
          count={10}
          size={30}
          edit={false}
          value={Number(detail.rate)}
          color2={"#ffd700"}
        />
        <p>{detail.synopsis}</p>
        <a href={detail.trailer}>
          <button className={styles.button}>
            Watch Trailer
            <div className={styles.button__horizontal}></div>
            <div className={styles.button__vertical}></div>
          </button>
        </a>
      </div>
    </div>
  );
}

export default Description;
