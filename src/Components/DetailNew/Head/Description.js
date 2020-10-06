import React from 'react';
import styles from './Description.module.css';
import Star from "../../../Images/star.png";
import Bintang from "../../../Images/bintang.png";

function Description (){
	
	return(
		<div className={styles.ContainerSlide}>
			<div className={styles.Overlay}>
				<ul className={styles.Slideshow}>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</div>
			<div className={styles.ContainerDesc}>
				<h1>MOVIES TITLE(2020)</h1>
				<img src={Star} alt="rating" />
                <img src={Star} alt="rating" />
                <img src={Star} alt="rating" />
                <img src={Star} alt="rating" />
                <img src={Bintang} alt="" />
				<p>Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart? </p>
				<button className={styles.button}>Watch Trailer
					<div className={styles.button__horizontal}></div>
					<div className={styles.button__vertical}></div>
				</button>
			</div>
		</div>
	)
}

export default Description;