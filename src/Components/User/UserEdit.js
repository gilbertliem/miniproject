import React, {useState} from 'react';
import styles from './User.module.css';
import back from '../../Images/background.jpg';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

function UserEdit (props) {
	
	const {user, page, change} = props;
	
	const [userData, setUserData] = useState({
			id: user.id,
			nama: user.nama,
			email: user.email,
			profileImage: {
				file: {},
				url: ""
			}
	}),
		[loading, setLoading] = useState(false),
		[token] = useState(localStorage.getItem('token'));
	
	const changeValue = (name, e) => {
			setUserData({
				...userData,
				[name] : e.target.value
			});
			console.log(userData);
		}
	
	const changePic = (e) => {
		const file = e.currentTarget.files[0];
		setUserData({
			...userData,
			profileImage: {
				file: e.currentTarget.files[0],
				url: URL.createObjectURL(file),
		  	},
		})
	}
	
	const submitEdit = async (e) => {
				e.preventDefault();
				try {
					setLoading(true);
					console.log(userData)
					const { nama, profileImage } = userData;
					const fd = new FormData();
					fd.append('nama', nama);
					fd.append('profileImage', profileImage.file);
					const submit = await axios({
						method: 'put',
						url: "https://damp-dawn-67180.herokuapp.com/user/edit",
						data: fd,
						headers: {
								access_token : token
						},
					  });
					setUserData(submit.data)
					console.log(userData)
					change();
					props.history.push('/user');
					setLoading(false)
				} catch (error) {
					console.log("error", error);
			}	
		}
	
	const {profileImage, nama} = userData;
	
	return(
		<div className={styles.UserShow}>
			<form onSubmit={(e) => submitEdit(e)}>
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
					{!loading ? <button className={styles.SubmitCancel} type="submit">Edit</button>
						: <button className={styles.SubmitCancel} type="submit">loading...</button>}
				</div>
			</form>
		</div>
	)
}

export default withRouter(UserEdit);