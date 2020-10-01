import React from 'react';
import styles from '../Home.module.css';
import netflix from '../../../../assets/Image/netflix.png';


const logo = () => {
	return(
		<div className={styles.Logo}>
			<img
				alt="logo"
				src={netflix}
				width="640px"
				height="360px"
				></img>
		</div>
	)
}

export default logo;