
import React, {useState, useEffect, useRef} from 'react';
import styles from '../DetailNew.module.css';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';
import Login from '../../Home/LoginFormik';
import Register from '../../Home/RegisterFormik';
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
			<Router>
				<ul>
					<li><NavLink to="/">Movies</NavLink></li>
					<li><NavLink to="/about">About</NavLink></li>
					{!token ? <li onClick={() => onChange('register', true)}><NavLink to="/register">Register</NavLink></li>
					: <li><NavLink to="#">Hi, {user.username}</NavLink></li>}
					{!token ? <li onClick={() => onChange('open', true)}><NavLink to="/login">Login</NavLink></li>
					: <li onClick={logout}><NavLink to="/">Logout</NavLink></li> }
				</ul>
				{modale}
				<Switch>
					<Route path="/login" component={Login}></Route>
					<Route path="/register" component={Register}></Route>
				</Switch>
			</Router>
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