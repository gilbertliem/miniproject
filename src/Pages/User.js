import React from 'react';
import Nav from '../Components/DetailNew/Head/NavDetail';
import UserShow from '../Components/User/UserShow';
import styles from '../Components/User/User.module.css';

function User (props) {
	
	return(
		<div className={styles.Container}>
			<Nav />
			<UserShow />
 		</div>
	)
}

export default User;