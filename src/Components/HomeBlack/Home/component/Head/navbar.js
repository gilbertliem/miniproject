import React, {Component} from 'react';
import styles from '../Home.module.css'
import { NavLink } from 'react-router-dom';

class Navbar extends Component{
	
	state = {
		token: localStorage.getItem('token')
	}

	
	logout = () => {
		localStorage.clear();
		this.setState({
			token: null
		})
	}
	
	
	render(){
		
	return (
		<div>
			<ul className={styles.Ul}>
				<li className={styles.Li}><NavLink to="/">Movies</NavLink></li>
				<li className={styles.Li}><NavLink to="/about">About</NavLink></li>
				<li className={styles.Li}><NavLink to="/register">Register</NavLink></li>
				{!this.state.token ? <li className={styles.Li}><NavLink to="/login">Login</NavLink></li>
				: <li className={styles.Li} onClick={this.logout}><NavLink to="/">Logout</NavLink></li> }
			</ul>
		</div>	
		)
	}
}

export default Navbar;