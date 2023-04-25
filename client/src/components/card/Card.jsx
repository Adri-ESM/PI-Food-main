import React from "react";
import styles from "./CardStyles.module.css";

export default function Card({ image, name, typeDiets }) {
    return (
      <div className={styles.cardContainer}>
      <img className={styles.cardImage} src={image} alt=""/> 
      <div className={styles.cardInfo}>
      <h3 className={styles.cardTitle}>Name: {name}</h3>
      <div className={styles.cardDiets}>
      <p>Type of Diets2: {typeDiets}</p>
      {Array.isArray(typeDiets) && typeDiets.map(function (diet) {
   return <span key={diet} className={styles.cardDiet}>{diet}</span>
})}
      
      </div>
      </div>
      </div>
      );
      }
