import React from 'react'
import styles from './LandingPage.module.css';
import { Link } from 'react-router-dom';
import Image from '../../../images/fruits-vegetables.jpg';
import ImageResp from '../../../images/food-responsive.jpg';


export default function LandingPage() {
  return (
    <div className={styles.landingContainer}>
        <img src={Image} alt="fruits and vegetables" className={styles.landingImage}></img> 
        <img src={ImageResp} alt="fruits and vegetables" className={styles.foodResponsive}></img>
        <Link to="/home">
           <button className={styles.landingButton}>
              <div className={styles.buttonIcono}>
              </div>
              <span>Welcome to Adri's Food</span>
            </button>
        </Link>  
    </div>
  )
}
