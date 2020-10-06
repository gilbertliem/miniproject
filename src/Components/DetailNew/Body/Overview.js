import React from "react";
import styles from './BodyDetail.module.css';

// ==================== //

function Overview () {
 
	
    return (
		<div>
			<div className={styles.Body}>
				<hr className={styles.Hr}></hr>
				<h1>Synopsis</h1>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy
					text ever since the 1500s, when an unknown printer took. Lorem
					Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy
					text ever since the 1500s, when an unknown printer took.
				</p>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy
					text ever since the 1500s, when an unknown printer took. Lorem
					Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy
					text ever since the 1500s, when an unknown printer took.
				</p>
			</div>
			<div className={styles.Body}>
				<h1>Movie Info</h1>
				<hr className={styles.Hr}></hr>
				<p>Release Date: 8 Januari 1990</p>
				<p>Director: Azani Jelas</p>
				<p>Cast: Azani, Ramadhan, Rushardono, Jokowi, Luhut, Terawan</p>
			</div>
		</div>
    );
  }

export default Overview;


 // <div>
 //            <h1 className="synopsis-title">Synopsis</h1>
 //            <div className="synopsis">
              // <p>
              //   Lorem Ipsum is simply dummy text of the printing and typesetting
              //   industry. Lorem Ipsum has been the industry's standard dummy
              //   text ever since the 1500s, when an unknown printer took. Lorem
              //   Ipsum is simply dummy text of the printing and typesetting
              //   industry. Lorem Ipsum has been the industry's standard dummy
              //   text ever since the 1500s, when an unknown printer took.
              // </p>
              // <p>
              //   Lorem Ipsum is simply dummy text of the printing and typesetting
              //   industry. Lorem Ipsum has been the industry's standard dummy
              //   text ever since the 1500s, when an unknown printer took. Lorem
              //   Ipsum is simply dummy text of the printing and typesetting
              //   industry. Lorem Ipsum has been the industry's standard dummy
              //   text ever since the 1500s, when an unknown printer took.
              // </p>
 //            </div>
 //            <div className="list-info">
 //              <h1>Movie Info</h1>
 //              <div className="movie-info">
 //                <p>
 //                  <strong>Release date</strong> : January 5, 1998
 //                </p>
 //                <p>
 //                  <strong>Director</strong> : John Doe
 //                </p>
 //                <p>
 //                  <strong>Featured song</strong> : Pegasus fantasi
 //                </p>
 //                <p>
 //                  <strong>Budget</strong> : 200 million USD
 //                </p>
 //                <p>
 //                  <strong>Release date</strong> : January 5, 1998{" "}
 //                </p>
 //                <p>
 //                  <strong>Director</strong> : James Cameron
 //                </p>
 //                <p>
 //                  <strong>Featured song</strong> : Soldier dream
 //                </p>
 //                <p>
 //                  <strong>Budget</strong> : 200 million USD
 //                </p>
 //              </div>
 //            </div>
 //          </div>