import React, { useState, useEffect } from "react";
import { getRecipesByName, getAllRecipes, filterRecipesByDiet } from '../../redux/actions.js';
import styles from './CardsStyles.module.css';



const PaginationCards = ({ recipeName, cardsPerPage,filterOption }) => {
  const [data, setData] = useState([]);

  useEffect(() => {

    if (recipeName !== '') {
 
      getRecipesByName(recipeName).then((response) => {
        setData(response.data);
      });
    }
    if (filterOption !== '' ){

      filterRecipesByDiet(filterOption).then((response) => {
        setData(response.data);
      });
    } 
    if (filterOption === '' && recipeName === ''){
      getAllRecipes().then((response) => {
        setData(response.data);
      });
    }
  }, [recipeName,filterOption]);

  const itemsPerPage = cardsPerPage;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const handleClick = (e, index) => {
    e.preventDefault();
    setCurrentPage(index);
  };

  const renderCards = () => {
    //const startIndex = (currentPage - 1) * itemsPerPage;
    //const endIndex = startIndex + itemsPerPage;
    if (Array.isArray(data)) {
      
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      //const pageData = data.slice(startIndex, endIndex);
      return data.slice(startIndex, endIndex).map((card) => {
        return (
          <div className={styles.cardsContainer} key={card.id}>
            <img src={card.image} alt={card.name} className={styles.cardImage}/>
            <h2 className={styles.cardName}>{card.name}</h2>
            <p className={styles.cardResume}><b>Resume:</b> {card.plate_resume}</p>
            <p className={styles.cardResume}>
              <b>Diets:</b>{" "}
              {card.diets && card.diets.map((diet) => diet.name)}
            </p>
          </div>
        );
      });
    } else {
      // Handle the case where data is not an array
    }
  };

  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <li key={i}>
          <button
            href="#"
            onClick={(e) => handleClick(e, i)}
            className={i === currentPage ? "active" : ""}
          >
            {i}
          </button>
        </li>
      );
    }

    // Agregar flecha hacia la izquierda si no estamos en la primera página
    if (currentPage > 1) {
      pages.unshift(
        <li key="back">
          <button
            href="#"
            onClick={(e) => handleClick(e, currentPage - 1)}
          >
            &lt;
          </button>
        </li>
      );
    }

    // Agregar flecha hacia la derecha si no estamos en la última página
    if (currentPage < totalPages) {
      pages.push(
        <li key="next">
          <button
            href="#"
            onClick={(e) => handleClick(e, currentPage + 1)}
          >
            &gt;
          </button>
        </li>
      );
    }

    return pages;
};

  return (
    <div>
      <div className={styles.cardsPerPage}>{renderCards()}</div>
      <ul className={styles.paginationCards}>{renderPagination()}</ul>
    </div>
  );
};

export default PaginationCards;