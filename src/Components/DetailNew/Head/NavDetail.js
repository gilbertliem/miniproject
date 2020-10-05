
import React, {useState, useEffect, useRef} from 'react';
import styles from '../DetailNew.module.css';
import { NavLink } from 'react-router-dom';
import Login from '../../Home/Login';
import Register from '../../Home/Register';
import axios from 'axios';


function NavDetail () {
	
	const [token, setToken] = useState(localStorage.getItem('token')),
		  [user, setUser] = useState([]),
		  [modal, setModal] = useState({
			  open: false,
			  register: false
		  })
	
	const prevCount = usePrevious(token);
	
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
		
		if(token !== prevCount){
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
		}
	}, [token])
	
	const onChange = (name, value ) => {
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
	
	
	const {open, register} = modal;
	
	let modale = "";
	
	 if(open){
		 modale = <Login
            open={open}
            onChange={onChange}
            onClose={() => onChange("open", false)}
          />
	 } else if (register){
		 modale =  <Register
            open={register}
            onChange={onChange}
            onClose={() => onChange("register", false)}
          />
	 }
	  
	
	return(
			<div className={styles.DivNav}>
				<ul>
					<li><NavLink to="/">Movies</NavLink></li>
					<li><NavLink to="/about">About</NavLink></li>
					{!token ? <li onClick={() => onChange('register', true)}><NavLink to="#">Register</NavLink></li>
					: <li><NavLink to="#">Hi, {user.username}</NavLink></li>}
					{!token ? <li onClick={() => onChange('open', true)}><NavLink to="#">Login</NavLink></li>
					: <li onClick={logout}><NavLink to="/">Logout</NavLink></li> }
				</ul>
				{modale}
			</div>	
	)
}

	function usePrevious(value) {
		
		const ref = useRef();

   		useEffect(() => {
    		ref.current = value;
  		});

		return ref.current;
}

export default NavDetail;