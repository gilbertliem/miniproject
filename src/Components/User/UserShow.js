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
	
	useEffect(() => {
		if(token){
			axios.get("https://appdoto.herokuapp.com/api/user/", {
				headers: {
					Authorization: token
				}
			})
				.then(response => {
					setUser(response.data.data);
			})
		}
	}, [])
	
	useEffect(() => {
		
			if(token){
				axios.get("https://appdoto.herokuapp.com/api/user/", {
					headers: {
						Authorization: token
					}
				})
					.then(response => {
					setUser(response.data.data);
				})
			}
		}, [token])
	
	const onChange = () => {
		setPage(!page);
	}
		
	const { username, fullname, email } = user;
	
	return(
		<div>
			{!page ? (
			<div className={styles.UserShow}>
				<div>
					<img src={back} className={styles.Background} alt="back"></img>
				</div>
				<div className={styles.Profile}>
					<img src={azanirr} alt="azanirr"></img>
					<h1>{fullname}</h1>
				</div>
				<div className={styles.Row}>
					<div className={styles.List}>
						<h3>Email<span>:</span></h3>
						<h3>Username<span>:</span></h3>
					</div>
					<div className={styles.Edit}>
						<h3>{email}</h3>
						<h3>{username}</h3>
					</div>
				</div>
				<div className={styles.Button}>
					<Link onClick={onChange} to="/user/edit">
						<button className={styles.Submit} type="submit" value="Submit">Edit Profile</button>
					</Link>
				</div>
			</div>	
			) : null }
			<Route path="/user/edit">
				<EditUser 
					user={user}
					page={page}
					change={onChange}
					/>
		  	</Route>
			</div>
			
	)
}

export default UserShow;