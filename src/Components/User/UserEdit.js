import React, {useState, useEffect} from 'react';
import styles from './User.module.css';
import azanirr from '../../Images/azanirr.jpg';
import back from '../../Images/background.jpg';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';

function UserEdit (props) {
	
	const {user, page, change, edit} = props;
	
	const [userData, setUserData] = useState({
			username: user.username,
			email: user.email,
			fullname: user.fullname
	}),
		[loading, setLoading] = useState(false),
		[token, setToken] = useState(localStorage.getItem('token'));
	
	const changeValue = (name, e) => {
			setUserData({
				...userData,
				[name] : e.target.value
			});
			console.log(userData);
		}

	const submitEdit = (e, name) => {
		if(e.which === 13){
			edit(name, userData[name]);
			console.log("name on useredit " + name);
			props.history.push('/user');
			console.log('user array name' + userData[name])
			change();
			localStorage.setItem('user', JSON.stringify(userData));
		}
	}
	
// 	const submitEdit = async (e) => {
// 			if(e.which === 13 && token) {
// 				try {
// 				setLoading(true);
// 				const { email, username, fullname } = userData;
// 				const submit = await axios.put("https://appdoto.herokuapp.com/api/user",
// 					{
// 						body: {
// 							email: email,
// 							username: username,
// 							fullname: fullname
// 						},
// 						headers: {
// 							Authorization: 'Token ' + token
// 					}
// 				})
// 				localStorage.setItem('user', JSON.stringify(submit.data.data));
// 				change();
// 				props.history('/user');
// 				setLoading(false)
// 			} catch (error) {
// 				console.log("error", error);
// 			}	
// 		}	
// 	}
	
	const {username, email, fullname} = userData;
	
	return(
		<div className={styles.UserShow}>
			<div>
				<img src={back} className={styles.Background} alt="back"></img>
			</div>
			<div className={styles.Profile}>
				<img src={azanirr} alt="azanirr"></img>
				<input 
					onChange={(e) => changeValue("fullname", e)}
					onKeyPress={(e) => submitEdit(e, "fullname")}
					type="text" value={fullname} name="fullname"></input>
			</div>
			<div className={styles.Row}>
				<div className={styles.List}>
					<h3>Email<span>:</span></h3>
					<h3>Username<span>:</span></h3>
				</div>
				<div className={styles.Edit}>
					<input 
						onChange={(e) => changeValue("email", e)}
						onKeyPress={(e) => submitEdit(e, "email")}
						type="email" name="email" value={email}></input>
					<input 
						onChange={(e) => changeValue("username", e)}
						onKeyPress={(e) => submitEdit(e, "username")}
						type="text" name="username" value={username}></input>
				</div>
			</div>
			<div className={styles.Button}>
				<Link onClick={change} to="/user">
					<button className={styles.SubmitCancel} type="submit">Cancel</button>
				</Link>
			</div>
		</div>
	)
}

export default withRouter(UserEdit);