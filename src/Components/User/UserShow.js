import React, { useState, useEffect } from 'react';
import styles from './User.module.css';
import azanirr from '../../Images/azanirr.jpg';
import back from '../../Images/background.jpg';
import { Link, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import EditUser from './UserEdit';


function UserShow () {
	
	const [user, setUser] = useState([]),
		  [token, setToken] = useState(localStorage.getItem('token')),
		  [page, setPage] = useState(false);
	
	const edit = (name, value) => {
		const newData = setUser({
			...user,
			[name]: value
		})
		console.log(user);
		
	}
	
	useEffect( () => {
		if(token){
			axios.get("https://damp-dawn-67180.herokuapp.com/user/id", {
				headers: {
					access_token: token
				}
			})
				.then(response => {
				setUser(response.data.users);
				console.log(response);
			})
	}
	}, [])
	
	const onChange = () => {
		setPage(!page);
	}
		
	const { nama, email, profileImage } = user;
	
	return(
		<div>
			{!page ? (
			<div className={styles.UserShow}>
				<div>
					<img src={back} className={styles.Background} alt="back"></img>
				</div>
				<div className={styles.Profile}>
					<img src={profileImage} alt="user"></img>
					<h1>{nama}</h1>
				</div>
				<div className={styles.Row}>
					<div className={styles.List}>
						<h3>Email<span>:</span></h3>
					</div>
					<div className={styles.Edit}>
						<h3>{email}</h3>
					</div>
				</div>
				<div className={styles.Button}>
					<Link onClick={onChange} to="/user/edit">
						<button className={styles.Submit} type="submit" value="Submit">Edit Profile</button>
					</Link>
				</div>
			</div>	
			) : null }
			<Switch>
			<Route path="/user/edit">
				<EditUser 
					user={user}
					page={page}
					change={onChange}
					edit={edit}
					/>
		  	</Route>
			</Switch>
			</div>
			
	)
}

export default UserShow;