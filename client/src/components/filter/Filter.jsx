import React, { useState, useEffect } from 'react';
import styles from './FilterStyles.module.css';
import { getAllDiets } from '../../redux/actions.js';

export default function Filter({ onFilter, onHealthScore }) {
  const [selectedOption, setSelectedOption] = useState('');
  const [filterHealthScore, setfilterHealthScore] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllDiets().then((response) => {
      setData(response.data);
    });
  }, []);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleFilterClick = () => {
    onFilter(selectedOption);
    setSelectedOption('');
  }

  const handleInputChange = (event) => {
    setfilterHealthScore(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onHealthScore(filterHealthScore);
    setfilterHealthScore('');
  };


  return (
    <div className={styles.filterDietsHealth}>
      <div className={styles.filterContainer}>
        <label>
          <span>Types of Diets:</span>
          <select value={selectedOption} onChange={handleOptionChange}>
            <option className={styles.option} value="">Search</option>
            {data.map((option) => (
              <option value={option.name} key={option.id}>{option.name}</option>
            ))}
          </select>
        </label>
        <button className={styles.filterButton} onClick={handleFilterClick}>Filter</button>
      </div>

    <div className={styles.filterHealthContainer}>
      <form className={styles.filterHealthForm} onSubmit={handleSubmit}>
      <span>By Health:</span>
        <input
          name='filterHealthScore'
          value={filterHealthScore}
          onChange={handleInputChange}
          placeholder='Search'
        />  
      <div>
          <button className={styles.filterButton} type='submit'>Filter</button>
        </div>
        </form>
    </div>
    </div>
  );
}
