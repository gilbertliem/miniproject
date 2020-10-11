import React from 'react';

import Head from '../Components/DetailNew/Head/Head';
import Body from '../Components/DetailNew/Body/Body';

function Detail (props) {
	
	return(
		<div>
			<Head detail={props.detail} />
			<Body 
				detailReview={props.detailReview}
				detail={props.detail}
				/>
		</div>
	)
}

export default Detail;