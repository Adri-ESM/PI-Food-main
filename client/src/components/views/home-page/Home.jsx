import React from 'react';
import Navbar from "../../navbar/Navbar";
import styles from './HomeStyles.module.css';
import Cards from '../../cards/Cards';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipeByName} from '../../../redux/actions.js';

//const Recipe = useSelector(state => state.Recipe);

export default function Home() {
  
  const dispatch = useDispatch();
  const Recipe = useSelector(state => state.Recipe);

  useEffect(() => {
    dispatch(getRecipeByName())
  }, [dispatch])

  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.homeTitle}>Hola soy el Home</h1>
      <Navbar />
      <Cards cardData={Recipe && Recipe.recipes} />
    </div>
  )
}




