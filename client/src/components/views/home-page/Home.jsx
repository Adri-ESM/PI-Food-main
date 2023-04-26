import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import Navbar from '../../navbar/Navbar';
import styles from './HomeStyles.module.css';
import Cards from '../../cards/Cards';
import Filter from '../../filter/Filter';

export default function Home() {
  const [recipeName, setRecipeName] = useState('');
  const [filterOption, setFilterOption] = useState('');


  const handleSearch = (searchTerm) => {
    setRecipeName(searchTerm);


  };

  const handleFilter = (filterOption) => {
    setFilterOption(filterOption);
  };

  return (
    <div className={styles.homeContainer}>
      <Navbar onSearch={handleSearch} onFilter={handleFilter} />
      <Filter onFilter={handleFilter} />
      <Cards recipeName={recipeName} filterOption={filterOption} cardsPerPage={9} />
    </div>
  );
}






