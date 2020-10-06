import React from 'react';
import styles from '../DetailNew.module.css';
import NavDetail from './NavDetail';
import Description from './Description';

function Head () {
	
	
	return(
		<div className={styles.Container}>
			<NavDetail />
			<Description />
		</div>
	)
}

export default Head;