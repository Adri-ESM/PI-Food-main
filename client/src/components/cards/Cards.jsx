import React, { useState, useEffect } from "react";
import { getRecipesByName } from '../../redux/actions.js';
import styles from './CardsStyles.module.css';


const PaginationCards = ({ recipeName, cardsPerPage }) => {
  // const [data, setData] = useState([]);
  // console.log(recipe.recipeName);
  // useEffect(() => {
  //   getRecipesByName(recipe.recipeName).then(response => {
  //       setData(response.data);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }, []);

  const [data, setData] = useState([]);

  useEffect(() => {
    if (recipeName) {
      getRecipesByName(recipeName).then((response) => {
        setData(response.data);
      });
    }
  }, [recipeName]);

  const itemsPerPage = cardsPerPage;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  console.log(totalPages);
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



























// import React from 'react';
// import styles from './CardsStyles.module.css';
// import Card from '../card/Card';
// import { useEffect } from 'react';
// import { useState } from 'react';
// import { ArrowBack, ArrowForward } from '@material-ui/icons';
// import { getRecipesByName } from '../../redux/actions.js';

// export default function Cards() {
//   console.log("IN THE CARDS")
//   const [currentPage, setCurrentPage] = useState(0);
//   const [recipes, setRecipes] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await getRecipesByName();
//       console.log("RESULT: "+result)
//       console.log(result.payload)
//       setRecipes(result.payload);
//     };
//     fetchData();
//   }, []);

// //   //Obtiene el array correspondiente a la página actual
// //   const cardsToDisplay = recipes && recipes.slice(currentPage * 10, currentPage * 10 + 10);

// //   const maxPages = 10;

// // //Función para ir a la página siguiente
// //   const handleNextPage = () => {
// //     if (currentPage !== 9) {
// //       setCurrentPage(currentPage + 1);
// //     }
// //   };

// //   //Función para ir a la página anterior
// //   const handlePreviousPage = () => {
// //     if (currentPage !== 0) {
// //       setCurrentPage(currentPage - 1);
// //     }
// //   };

//   return ( <h1>Hola Card</h1>
//   //   <div className={styles.cardsList}>
//   //     {/* Renderiza las primeras 9 tarjetas */}
//   //     {cardsToDisplay && cardsToDisplay.map((card) => (
//   //       <Card
//   //         key={card.id}
//   //         image={card.image}
//   //         name={card.name}
//   //         typeDiets={card.typeDiets}
//   //       />
//   //     ))}



//   // <div className={styles.pagination}>
//   //   <button onClick={handlePreviousPage} disabled={currentPage === 0}>
//   //     <ArrowBack />
//   //   </button>
//   //   {Array.from({ length: maxPages }).map((_, index) => (
//   //     <button
//   //       key={index}
//   //       className={`${styles.pageNumberButton} ${
//   //         currentPage === index ? styles.active : ""
//   //       }`}
//   //       onClick={() => setCurrentPage(index)}
//   //     >
//   //       {index + 1}
//   //     </button>
//   //   ))}
//   //   <button
//   //     onClick={handleNextPage}
//   //     disabled={
//   //       currentPage === Math.ceil(recipes.length / 10) - 1
//   //     }
//   //   >
//   //     <ArrowForward />
//   //   </button>
//   // </div>

//   //   </div>
//   );
// }


// //ESTE CODIGO FUNCIONA PARA LA API, LA QUE NO FUNCIONA ES LA API
// // import React from 'react';
// // import styles from './CardsStyles.module.css';
// // import Card from '../card/Card';
// // import { useEffect } from 'react';
// // import { useState } from 'react';
// // import { ArrowBack, ArrowForward } from '@material-ui/icons';
// // import { getRecipesByName } from '../../redux/actions.js';

// // export default function Cards() {
  
// //   const [currentPage, setCurrentPage] = useState(0);
// //   const [recipes, setRecipes] = useState([]);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       const result = await getRecipesByName();
// //       if (result && result.payload && result.payload.results) {
// //         setRecipes(result.payload.results);
// //       }
// //     };
// //     fetchData();
// //   }, []);

// //   //Obtiene el array correspondiente a la página actual
// //   const cardsToDisplay = recipes && recipes.slice(currentPage * 10, currentPage * 10 + 10);

// //   const maxPages = 10;

// // //Función para ir a la página siguiente
// //   const handleNextPage = () => {
// //     if (currentPage !== 9) {
// //       setCurrentPage(currentPage + 1);
// //     }
// //   };

// //   //Función para ir a la página anterior
// //   const handlePreviousPage = () => {
// //     if (currentPage !== 0) {
// //       setCurrentPage(currentPage - 1);
// //     }
// //   };

// //   return (
// //     <div className={styles.cardsList}>
// //       {/* Renderiza las primeras 9 tarjetas */}
// //       {cardsToDisplay && cardsToDisplay.map((card) => (
// //         <Card
// //           key={card.id}
// //           image={card.image}
// //           name={card.name}
// //           typeDiets={card.typeDiets}
// //         />
// //       ))}



// //   <div className={styles.pagination}>
// //     <button onClick={handlePreviousPage} disabled={currentPage === 0}>
// //       <ArrowBack />
// //     </button>
// //     {Array.from({ length: maxPages }).map((_, index) => (
// //       <button
// //         key={index}
// //         className={`${styles.pageNumberButton} ${
// //           currentPage === index ? styles.active : ""
// //         }`}
// //         onClick={() => setCurrentPage(index)}
// //       >
// //         {index + 1}
// //       </button>
// //     ))}
// //     <button
// //       onClick={handleNextPage}
// //       disabled={
// //         currentPage === Math.ceil(recipes.length / 10) - 1
// //       }
// //     >
// //       <ArrowForward />
// //     </button>
// //   </div>

// //     </div>
// //   );
// // }