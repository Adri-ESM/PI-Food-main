import React, { useState } from 'react';
import styles from './FilterStyles.module.css';

export default function Filter({ onFilter, onHealthScore }) {
  const [selectedOption, setSelectedOption] = useState('');
  const [filterHealthScore, setfilterHealthScore] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  
  const handleFilterClick = () => {
    onFilter(selectedOption);
    setSelectedOption('');
  }
  
  const handlefilterHealthScoreClick = () => {
    onHealthScore(filterHealthScore);
    setfilterHealthScore('');
  }
  return (
    <div className={styles.filterDietsHealth}>
      <div className={styles.filterContainer}>
        <label>
          <span>Types of Diets:</span>
          <select value={selectedOption} onChange={handleOptionChange}>
            <option value=""></option>
            <option value="dairy free">dairy free</option>
              <option value="gluten free">gluten free</option>
              <option value="vegan">vegan</option>
              <option value="whole 30">whole 30</option>
              <option value="vegetarian">vegetarian</option>
              <option value="lacto ovo vegetarian">lacto ovo vegetarian</option>
              <option value="paleolithic">paleolithic</option>
          </select>
        </label>
      <button className={styles.filterButton} onClick={handleFilterClick}>Filter</button>
      </div>
      <div className={styles.filterHealthContainer}>
        <label>
          <span>Health Score:</span>
          <select value={filterHealthScore} onChange={handlefilterHealthScoreClick}>
            <option value=""></option>
          </select>
        </label>
      <button className={styles.filterButton} onClick={handlefilterHealthScoreClick}>Filter</button>
      </div>
    </div>
  );
}
