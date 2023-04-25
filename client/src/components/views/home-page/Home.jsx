import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import Navbar from '../../navbar/Navbar';
import styles from './HomeStyles.module.css';
import Cards from '../../cards/Cards';


export default function Home() {

  const [recipeName, setRecipeName] = useState('');

  const handleSearch = (searchTerm) => {
    setRecipeName(searchTerm);
  };

  return (
    <div className={styles.homeContainer}>
      <Navbar onSearch={handleSearch} />
      <Cards recipeName={recipeName} cardsPerPage={10} />
    </div>
  );
}





//MI CODIGO FUNCIONAL CON JSON

// import React from 'react';
// import Navbar from "../../navbar/Navbar";
// import styles from './HomeStyles.module.css';
// import Cards from '../../cards/Cards';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getRecipesByName} from '../../../redux/actions.js';


// export default function Home() {
  
//   const dispatch = useDispatch();
//   const Recipe = useSelector(state => state.Recipe);

//   useEffect(() => {
//     dispatch(getRecipesByName())
//   }, [dispatch])

//   return (
//     <div className={styles.homeContainer}>
//       <h1 className={styles.homeTitle}>Hola soy el Home</h1>
//       <Navbar />
//       <Cards cardData={Recipe && Recipe.recipes} />
//     </div>
//   )
// }








