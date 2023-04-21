import React from "react";
import styles from "./CardStyles.module.css";
//import { useState } from "react";



export default function Card({ image, name, typeDiets }) {
    
  
    return (
      <div className={styles.cardContainer}>
      <img className={styles.cardImage} src={image} alt={name}/>Image<img/> 
      <div className={styles.cardInfo}>
      <h3 className={styles.cardTitle}>Name: {name}</h3>
      <div className={styles.cardDiets}>
      <p>Type of Diets: {typeDiets}</p>
      {typeDiets.map((diet) => (
      <span key={diet} className={styles.cardDiet}>
      {diet}
      </span>
      ))}
      </div>
      </div>
      </div>
      );
      }

// <img className={styles.cardImg} src={image} alt={name}/>Image<img/> 
//             <h3 className={styles.cardTitle}>Nombre: {name}</h3>
//             <p>Type of Diets: {typeDiets}</p>