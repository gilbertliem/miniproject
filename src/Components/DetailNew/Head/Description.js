import React from 'react';
import styles from './Description.module.css';
import Star from "../../../Images/star.png";
import Bintang from "../../../Images/bintang.png";
import ReactStars from 'react-stars'
import {Link} from 'react-router-dom';

function Description (props){
	
	const {detail} = props;
	
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
				<h1>{detail.title}</h1>
				<ReactStars
  					count={10}
					size={24}
					edit={false}
					value={detail.rate}
 					color2={'#ffd700'} />
				<p>{detail.synopsis}</p>
				<a href={detail.trailer}>
				<button className={styles.button}>Watch Trailer
					<div className={styles.button__horizontal}></div>
					<div className={styles.button__vertical}></div>
				</button>
				</a>
			</div>
		</div>
	)
}

export default Description;