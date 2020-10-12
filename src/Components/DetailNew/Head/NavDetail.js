import React, {useState, useEffect} from 'react';
import styles from '../DetailNew.module.css';
import { NavLink } from 'react-router-dom';
import Login from '../../Home/LoginFormik';
import Register from '../../Home/RegisterFormik';
import logo from '../../../Images/netflixxx.png';
import axios from 'axios';


function NavDetail () {
	
	const [token, setToken] = useState(localStorage.getItem('token')),
		  [user, setUser] = useState([]),
		  [modal, setModal] = useState({
			  open: false,
			  register: false
		  })
	
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
	}, [token])
	
	const onChange = ( name, value ) => {
		setToken(localStorage.getItem('token'));
    	setModal({ 
			[name] : value
		})
		console.log(modal);
		console.log("Bisa");
  	}
	
	const logout = () => {
		localStorage.clear();
		setToken(null);
		setUser({});
	}
	
	const switchModal = () => {
		setModal({
			open: !modal.open,
			register: !modal.register
		})
	}
	
	
	const {open, register} = modal;
	
	let modale = "";
	
	 if(open){
		 modale = <Login
            open={open}
            onChange={onChange}
			switchModal={switchModal}
            onClose={() => onChange("open", false)}
          />
	 } else if (register){
		 modale =  <Register
            open={register}
            onChange={onChange}
			switchModal={switchModal}
            onClose={() => onChange("register", false)}
          />
	 }
	  
	
	return(
			<div className={styles.DivNav}>
				<ul>
					<li><img src={logo} alt="logo" width="70px" heighti="52.5px"></img></li>
					<li>
						
						<NavLink to="/">Movies</NavLink>
					</li>
					{!token ? <li onClick={() => onChange('register', true)}><NavLink to="#">Register</NavLink></li>
						: (
						<div className={styles.ConUsername}>
							<li><NavLink to="/user">{user.nama}</NavLink></li>
						</div>	
						)}
					{!token ? <li onClick={() => onChange('open', true)}><NavLink to="#">Login</NavLink></li>
					: <li onClick={logout}><NavLink to="/">Logout</NavLink></li> }
				</ul>
				{modale}
			</div>
			
	)
}


export default NavDetail;