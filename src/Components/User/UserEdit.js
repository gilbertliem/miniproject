import React, {useState, useEffect} from 'react';
import styles from './User.module.css';
import azanirr from '../../Images/azanirr.jpg';
import back from '../../Images/background.jpg';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';

function UserEdit (props) {
	
	const {user, page, change, edit} = props;
	
	const [userData, setUserData] = useState({
			id: user.id,
			nama: user.nama,
			email: user.email,
			profileImage: user.profileImage
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
	
	const changePic = (e) => {
		setUserData({
			...userData,
			profileImage: e.target.files[0]
		})
	}
	
	const submitEdit = async () => {
				try {
				setLoading(true);
				console.log(userData)
				const { nama, profileImage } = userData;
				const submit = await axios({
					method: 'put',
					url: "https://damp-dawn-67180.herokuapp.com/user/edit",
					data: {
							nama: nama,
							profileImage: profileImage
						},
					headers: {
							access_token : token
					},
				  });
				setUserData(submit.data)
				console.log(userData)
				change();
				setLoading(false)
			} catch (error) {
				console.log("error", error);
		}	
	}
	
	const {profileImage, email, nama} = userData;
	
	return(
		<div className={styles.UserShow}>
			<form onSubmit={submitEdit}>
				<div>
					<img src={back} className={styles.Background} alt="back"></img>
				</div>
				<div className={styles.Profile}>
					<img src={profileImage} alt="azanirr"></img>
					<input 
						onChange={(e) => changePic(e)}
						type="file" name="profileImage"></input>
					<input 
						onChange={(e) => changeValue("nama", e)}
						type="text" value={nama} name="nama"></input>
				</div>
				<div className={styles.Button}>
					<Link onClick={change} to="/user">
						<button className={styles.SubmitEdit} onSubmit={submitEdit} type="submit">Edit</button>
					</Link>
					<Link onClick={change} to="/user">
						<button className={styles.SubmitCancel} type="submit">Cancel</button>
					</Link>
				</div>
			</form>
		</div>
	)
}

export default withRouter(UserEdit);