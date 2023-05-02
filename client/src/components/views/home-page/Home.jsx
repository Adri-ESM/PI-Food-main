import React, { useState, useEffect } from 'react';
import Navbar from '../../navbar/Navbar';
import styles from './HomeStyles.module.css';
import Cards from '../../cards/Cards';
import Filter from '../../filter/Filter';

export default function Home() {
  const [recipeName, setRecipeName] = useState('');
  const [filterOption, setFilterOption] = useState('');
  const [filterHealth, setFilterHealthScore] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

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
      {isLoading ? (
        <div className={styles.loader}>Loading...</div>
      ) : (
        
        <>
  
          <Navbar onSearch={handleSearch} onFilter={handleFilter} onHealthScore={handleFilterHealthScore}/>
          <Filter onFilter={handleFilter} onHealthScore={handleFilterHealthScore}/>
          <Cards recipeName={recipeName} filterOption={filterOption} filterHealth={filterHealth} cardsPerPage={9} />
          
        </>
         
      )}
    </div>
  );
}









