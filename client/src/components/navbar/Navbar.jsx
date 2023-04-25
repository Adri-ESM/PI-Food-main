import React, { useState } from 'react';
import styles from './NavbarStyles.module.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Logo from '../../images/adrisFoodLogo.png';
import Image from '../../images/fruits-vegetables.jpg';

export default function Navbar({ onSearch }) {
  const [recipeName, setRecipeName] = useState('');

  const handleInputChange = (event) => {
    setRecipeName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(recipeName);
  };


  return (
    <div>
    <div className={styles.navbarContainer}>
    <a href='/'>
    <img src={Logo} alt='logo' className={styles.logo}></img>
    </a>
    <div className={styles.searchBox}>
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <input
            name='recipeName'
            value={recipeName}
            onChange={handleInputChange}
            onKeyPress={(event) => {
              if (event.key === 'Enter') {
                event.preventDefault();
                handleSubmit();
              } else if (event.target.value.trim() === '') {
                event.target.value = '';
              }
            }}
            placeholder='Búsqueda'
          />
        <div className={styles.searchButton}>
          <button type='submit'>Buscar</button>
        </div>
    </form>
    </div>
    <div className={styles.navbarLinks}>
      <div className={styles.navbarHome}>
        <Link to='/home'>Home</Link>
      </div>
      <div className={styles.navbarCreate}>
        <Link to='/form'>Create Recipe</Link>
      </div>
      <div className={styles.navbarExit}>
        <Link to='/'>Exit</Link>
      </div>
    </div>
    </div>
    <div className={styles.navbarButtons}>
    <div >
          <button className={styles.buttonDB} type='submit'>Recipes from Api</button>
        </div>
        <div>
          <button  className={styles.buttonApi} type='submit'>Recipes from DB</button>
        </div>
    </div>
    </div>
  );
}