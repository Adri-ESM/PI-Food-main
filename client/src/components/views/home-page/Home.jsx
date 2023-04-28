import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import Navbar from '../../navbar/Navbar';
import styles from './HomeStyles.module.css';
import Cards from '../../cards/Cards';
import Filter from '../../filter/Filter';

export default function Home() {
  const [recipeName, setRecipeName] = useState('');
  const [filterOption, setFilterOption] = useState('');
  const [filterHealth, setFilterHealthScore] = useState('');

  const handleSearch = (searchTerm) => {
    setRecipeName(searchTerm);
  };

  const handleFilter = (filterOption) => {
    setFilterOption(filterOption);
  };

  const handleFilterHealthScore = (filterHealth) => {
    setFilterHealthScore(filterHealth);
  };


  return (
    <div className={styles.homeContainer}>
      <Navbar onSearch={handleSearch} onFilter={handleFilter} onHealthScore={handleFilterHealthScore}/>
      <Filter onFilter={handleFilter} onHealthScore={handleFilterHealthScore}/>
      <Cards recipeName={recipeName} filterOption={filterOption} filterHealth={filterHealth} cardsPerPage={9} />
    </div>
  );
}






