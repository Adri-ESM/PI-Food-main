import React from 'react';
import styles from './CardsStyles.module.css';
import Card from '../card/Card';
import { useState } from 'react';
import { ArrowBack, ArrowForward } from '@material-ui/icons';
import PageNumber from '../pageNumber/PageNumber';

export default function Cards({ cardData }) {
  
  const [currentPage, setCurrentPage] = useState(0);

  // Obtiene el array correspondiente a la página actual
  const cardsToDisplay = cardData && cardData.slice(currentPage * 10, currentPage * 10 + 10);

  const maxPages = 10;

  // Función para ir a la página siguiente
  const goToNextPage = () => {
    if (currentPage !== 9) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Función para ir a la página anterior
  const goToPreviousPage = () => {
    if (currentPage !== 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className={styles.cardsList}>
      {/* Renderiza las primeras 9 tarjetas */}
      {cardsToDisplay && cardsToDisplay.map((card) => (
        <Card
          key={card.id}
          image={card.image}
          name={card.name}
          typeDiets={card.diet}
        />
      ))}


    {cardData && 
      cardData.length > 0 && 
      cardData.slice(currentPage * 10, currentPage * 10 + 10).map((recipe) => (
        <Card 
        key={recipe.id} 
        image={recipe.image} 
        name={recipe.title}
        typeDiets={recipe.diets} />
    ))}

<div className={styles.pageNumber}>
    <span>{currentPage + 1}</span>
    <span>Aquí está la página {currentPage + 1}</span>
  </div>

      {/* Agrega botones para ir a la página siguiente o anterior */}
      <div className={styles.pagination}>
        <button onClick={goToPreviousPage} disabled={currentPage === 0}>
          <ArrowBack />
        </button>
        {Array.from({ length: maxPages }).map((_, index) => (
        <button
            key={index}
            className={`${styles.pageNumberButton} ${currentPage === index ? styles.active : ''}`}
            onClick={() => setCurrentPage(index)}
        >
            {index + 1}
        </button>
      ))}
        <button
          onClick={goToNextPage}
          disabled={cardData && currentPage === Math.ceil(cardData.length / 10)}
        >
          <ArrowForward />
        </button>
      </div>
    </div>
  );
}





//-----------------codigo funcional----------------
// import React from 'react';
// import styles from './CardsStyles.module.css';
// import Card from '../card/Card';
// import { useState } from 'react';
// import PageNumber from '../pageNumber/PageNumber';

// export default function Cards({ cardData }) {
  
//   const [currentPage, setCurrentPage] = useState(0);

//   // Obtiene el array correspondiente a la página actual
//   const cardsToDisplay = cardData && cardData.slice(currentPage * 10, currentPage * 10 + 10);

//   const maxPages = 10;

//   // Función para ir a la página siguiente
//   const goToNextPage = () => {
//     if (currentPage !== 9) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   // Función para ir a la página anterior
//   const goToPreviousPage = () => {
//     if (currentPage !== 0) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   return (
//     <div className={styles.cardsList}>
//       {/* Renderiza las primeras 9 tarjetas */}
//       {cardsToDisplay && cardsToDisplay.map((card) => (
//         <Card
//           key={card.id}
//           image={card.image}
//           name={card.name}
//           typeDiets={card.diet}
//         />
//       ))}

// {cardData && cardData.length > 0 && cardData.slice(currentPage * 10, currentPage * 10 + 10).map((recipe) => (
//   <Card key={recipe.id} name={recipe.title} image={recipe.image} typeDiets={recipe.diets} />
// ))}

// <div className={styles.pageNumber}>
//     <span>{currentPage + 1}</span>
//     <span>Aquí está la página {currentPage + 1}</span>
//   </div>

//       {/* Agrega botones para ir a la página siguiente o anterior */}
//       <div className={styles.pagination}>
//         <button onClick={goToPreviousPage} disabled={currentPage === 0}>
//           Previous
//         </button>
//         {Array.from({ length: maxPages }).map((_, index) => (
//           <PageNumber
//             key={index}
//             number={index + 1}
//             onClick={() => setCurrentPage(index)}
//             active={currentPage === index}
//           />
//         ))}
//         <button
//           onClick={goToNextPage}
//           disabled={cardData && currentPage === Math.ceil(cardData.length / 10)}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }


//--------------primer codigo----------------
// export default function Cards() {
//   return (
//     <div className={styles.cardsList}>
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//     </div>
// )
// }
