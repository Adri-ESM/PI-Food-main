import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import Navbar from '../../navbar/Navbar';
import styles from './HomeStyles.module.css';
import Cards from '../../cards/Cards';
import Filter from '../../filter/Filter';

export default function Home() {
  const [recipeName, setRecipeName] = useState('');
  const [filterOption, setFilterOption] = useState('');

   const [filterHealthScore, setFilterHealthScore] = useState('');

  const handleSearch = (searchTerm) => {
    setRecipeName(searchTerm);
  };

  const handleFilter = (filterOption) => {
    setFilterOption(filterOption);
  };

  const handleFilterHealthScore = (filterHealthScore) => {
    setFilterHealthScore(filterHealthScore);
  };


  return (
    <div className={styles.homeContainer}>
      <Navbar onSearch={handleSearch} onFilter={handleFilter} onHealthScore={handleFilterHealthScore} />
      <Filter onFilter={handleFilter} onHealthScore={handleFilterHealthScore}/>
      <Cards recipeName={recipeName} filterOption={filterOption} filterHealthScore={filterHealthScore} cardsPerPage={9} />
    </div>
  );
}






