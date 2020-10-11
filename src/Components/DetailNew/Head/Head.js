import React from 'react';
import styles from '../DetailNew.module.css';
import NavDetail from './NavDetail';
import Description from './Description';

function Head (props) {
	
	
	return(
		<div className={styles.Container}>
			<NavDetail />
			<Description detail={props.detail}/>
		</div>
	)
}

export default Head;