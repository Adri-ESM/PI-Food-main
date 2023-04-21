import React from 'react'
import styles from './LandingPage.module.css';
import { Link } from 'react-router-dom';
import Image from '../../../images/fruits-vegetables.jpg';


export default function LandingPage() {
  return (
    <div className={styles.landingContainer}>
        <img src={Image} alt="fruits and vegetables" className={styles.landingImage}></img> 
        <button as={Link} to="/" className={styles.landingButton}>Welcome to Adri's Food</button>    
    </div>
  )
}
//
//import { NavLink } from 'react-router-dom';
//      <NavLink to="/home">Welcome to Adri's Food</NavLink>