import React from 'react';
import Nav from '../Components/DetailNew/Head/NavDetail';
import UserEdit from '../Components/User/UserEdit';
import styles from '../Components/User/User.module.css';

function User () {
	
	return(
		<div className={styles.Container}>
			<Nav />
			<UserEdit />
 		</div>
	)
}

export default User;