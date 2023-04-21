import React from 'react';
import styles from './NavbarStyles.module.css';


export default function Navbar () {
  return (
    <div className={styles.searchBox}>
      <form>
          <input placeholder='Búsqueda'/>
          <button>Buscar</button>

      </form>
    </div>
  )
}
