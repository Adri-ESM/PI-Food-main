import React, { useState } from 'react';
import styles from './NavbarStyles.module.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Logo from '../../images/adrisFoodLogo.png';


export default function Navbar({ onSearch }) {
  const [recipeName, setRecipeName] = useState('');

  const handleInputChange = (event) => {
    setRecipeName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(recipeName);
    setRecipeName('');
  };


  return (
    <div>
    <div className={styles.navbarContainer}>
    <a href='/home'>
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
            placeholder='Recipes'
          />
        <div className={styles.searchButton}>
          <button type='submit'>View</button>
        </div>
    </form>
    </div>
    <div className={styles.navbarLinks}>
      <div className={styles.navbarHome}>
        <a href='/home'>Home</a>
        {/* <Link to='/home'>Home</Link> */}
      </div>
      <div className={styles.navbarCreate}>
        <Link to='/form'>Create Recipe</Link>
      </div>
      <div className={styles.navbarExit}>
        <Link to='/'>Exit</Link>
      </div>
    </div>
    </div>
    <div id="filtersCards" >
    
    </div>
    </div>
  );
}