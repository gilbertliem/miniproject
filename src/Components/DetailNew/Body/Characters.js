import React from "react";

import maldini from "../../../Images/maldini.png";
import ricardo from "../../../Images/ricardo.png";
import cenko from "../../../Images/cenko.png";
import manuel from "../../../Images/manuel.png";
import pirlo from "../../../Images/pirlo.png";
import "./Characters.css";
import styles from './BodyDetail.module.css';

// ==================== //

function Characters () {
  
    return (
        <div className={styles.BodyCharacter}>
          <div className="card">
            <img src={maldini} alt="Paolo Maldini" />
            <div className="info">
              <span>
                <strong>Paolo Maldini</strong>
              </span>
            </div>
          </div>
          <div className="card">
            <img src={ricardo} alt="Ricardo Kaka" />
            <div className="info">
              <span>
                <strong>Ricardo Kaka</strong>
              </span>
            </div>
          </div>
          <div className="card">
            <img src={cenko} alt="Andriy Shevcenko" />
            <div className="info">
              <span>
                <strong>Andriy Shevcenko</strong>
              </span>
            </div>
          </div>
          <div className="card">
            <img src={manuel} alt="Manuel locatelli" />
            <div className="info">
              <span>
                <strong>Manuel locatelli</strong>
              </span>
            </div>
          </div>
          <div className="card">
            <img src={pirlo} alt="Andrea Pirlo" />
            <div className="info">
              <span>
                <strong>Andrea Pirlo</strong>
              </span>
            </div>
          </div>
        </div>
    );
  }

export default Characters;
