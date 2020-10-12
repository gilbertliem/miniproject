import React from "react";
import styles from './BodyDetail.module.css';
import moment from 'moment';

// ==================== //

function Overview (props) {
 
	const {detail} = props;
	
    return (
		<div>
			<div className={styles.Body}>
				<hr className={styles.Hr}></hr>
				<h1>Synopsis</h1>
				<p>
					{detail.synopsis}
				</p>
			</div>
			<div className={styles.Body}>
				<h1>Movie Info</h1>
				<hr className={styles.Hr}></hr>
				<p>Genre: {detail.genre}</p>
				<p>Release Date: {moment(detail.realeased_date).format("MMMM, D, YYYY")}</p>
				<p>Director: {detail.director}</p>
				<p>Cast: {detail.cast}</p>
			</div>
		</div>
    );
  }

export default Overview;

