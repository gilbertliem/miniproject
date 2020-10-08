import React from 'react';
import styles from './User.module.css';
import azanirr from '../../Images/azanirr.jpg';
import back from '../../Images/background.jpg';

function UserShow () {
	
	return(
		<div className={styles.UserShow}>
			<div>
				<img src={back} className={styles.Background} alt="back"></img>
			</div>
			<div className={styles.Profile}>
				<img src={azanirr} alt="azanirr"></img>
				<h1>Azani Ramadhan</h1>
			</div>
			<div className={styles.Row}>
				<div className={styles.List}>
					<h3>Email<span>:</span></h3>
					<h3>Username<span>:</span></h3>
				</div>
				<div className={styles.Edit}>
					<h3>azanirr@yahoo.com</h3>
					<h3>azanirr</h3>
				</div>
			</div>
			<button className={styles.Submit} type="submit" value="Submit">Edit Profile</button>
		</div>
	)
}

export default UserShow;