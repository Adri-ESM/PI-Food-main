import React, { useState, useEffect } from "react";
import { getRecipesByName, getAllRecipes, filterRecipesByDiet,filterRecipesByHealthScore } from '../../redux/actions.js';
import styles from './CardsStyles.module.css';
import { Link } from "react-router-dom";



const PaginationCards = ({ recipeName, cardsPerPage,filterOption, filterHealth }) => {
  const [data, setData] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');

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
    if (filterHealth !== '' ){
      filterRecipesByHealthScore(filterHealth).then((response) => {
        setData(response.data);
      });
    } 
    if (filterOption === '' && recipeName === '' && filterHealth === ''){
      getAllRecipes().then((response) => {
        setData(response.data);
      });
    }
  }, [recipeName,filterOption,filterHealth]);

  const itemsPerPage = cardsPerPage;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const handleClick = (e, index) => {
    e.preventDefault();
    setCurrentPage(index);
  };

  const handleSortAsc = () => {
    setSortOrder('asc');
    setData([...data].sort((a, b) => a.name.localeCompare(b.name)));
  };
  
  const handleSortDesc = () => {
    setSortOrder('desc');
    setData([...data].sort((a, b) => b.name.localeCompare(a.name)));
  };

  const renderCards = () => {
    //const startIndex = (currentPage - 1) * itemsPerPage;
    //const endIndex = startIndex + itemsPerPage;
    if (Array.isArray(data)) {
      
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      //const pageData = data.slice(startIndex, endIndex);
      const sortedData = [...data];
      if (sortOrder === 'asc') {
        sortedData.sort((a, b) => a.name.localeCompare(b.name));
        } else {
        sortedData.sort((a, b) => b.name.localeCompare(a.name));
        }
      return data.slice(startIndex, endIndex).map((card) => {
        return (
          <div className={styles.cardsContainer}>
            <Link to={`/detail/${card.id}`} key={card.id}></Link>
            <div>
              <img src={card.image} alt={card.name} className={styles.cardImage}/>
              <h2 className={styles.cardName}>{card.name}</h2>
              <p className={styles.cardResume}><b>Resume:</b> {card.plate_resume}</p>
              <p className={styles.cardResume}>
                <b>Diets:</b>{" "}
                {card.diets && card.diets.map((diet) => diet.name)}
              </p>
            </div>
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
       <div className={styles.sortButtonsContainer}>
        <button className={styles.sortAscButton} onClick={handleSortAsc}>A - Z</button>
        <button className={styles.sortDescButton} onClick={handleSortDesc}>Z - A</button>
      </div>
      <div className={styles.cardsPerPage}>{renderCards()}</div>
      <ul className={styles.paginationCards}>{renderPagination()}</ul>
     
      {/* <Link to={`/detail/${recipeName}`}>
         <p className="card-see-btn">Ver detalle</p>
      </Link> */}
      
    </div>
  );
};

export default PaginationCards;


