import React,{useState} from 'react';
import styles from '../DetailNew.module.css';
import { Route, Link, Switch} from 'react-router-dom';
import Overview from './Overview';
import Review from './Review';

function OptionDetail () {
	
	const [pages, setPages] = useState(false)
	
	const onChange = () => {
		setPages(true)
	}
	
	return(
		<div className={styles.ContainerOption}>
				<Link to="/detail/overview" onClick={onChange} className={styles.cta}>
					<span>Overview</span>
					<svg width="13px" height="10px" viewBox="0 0 13 10">
						<path d="M1,5 L11,5"></path>
						<polyline points="8 1 12 5 8 9"></polyline>
					</svg>
				</Link>
				<Link to="/detail/review" onClick={onChange} className={styles.cta}>
					<span>Review</span>
					<svg width="13px" height="10px" viewBox="0 0 13 10">
						<path d="M1,5 L11,5"></path>
						<polyline points="8 1 12 5 8 9"></polyline>
					</svg>
				</Link>
				{!pages && <Overview />}
			<Switch>
					<Route path="/detail/review" component={Review} />
					<Route path="/detail/overview" component={Overview} />
			</Switch>
		</div>
	)
}

export default OptionDetail;