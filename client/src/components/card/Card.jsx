import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import axios from 'axios';


 
const Card = ( { id, image, name, step_to_step, health_score } ) => {
   const [isDetail, setIsDetail] = useState(false);


   //const myFavorites = useSelector((state) => state.myFavorites);
   const dispatch = useDispatch();

   const handleFavorite = async () => {
      try {
        if (isFav) {
          setIsFav(false);
          dispatch(removeFavorite(id));
          await axios.delete("http://localhost:3001/rickandmorty/fav/:id");
        } else {
          setIsFav(true);
          dispatch(addFavorite({ id, image, name, species, status, gender, origin }));
          await axios.post("http://localhost:3001/rickandmorty/fav", {
            id,
            image,
            name,
            species,
            status,
            gender, 
            origin
          });
        }
      } catch (error) {
        console.error(error);
      }
    };

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [id, myFavorites]);

   let fontColor = '';
   if (status === 'Alive') {
     fontColor = 'alive-color';
   } else if (status === 'Dead') {
     fontColor = 'dead-color';
   } else if (status === 'unknown') {
      fontColor = 'unknown-color';;
   };

   return (
      <div className="card">
         <div className="card-header">
            <img src={image} alt={name} className="card-image"></img>
         </div>
         <div className="card-body-btn">
            <div className="card-body">
               <div className="card-num-stat">
               <h5 className="card-number">{id}</h5>
               <h3 className={fontColor} >{status}</h3>
               </div>
               <h2 className="card-title">{name}</h2>
               <h3 className="card-specie">{species}</h3>
               
               <Link to={`/detail/${id}`}>
                  <p className="card-see-btn"></p>
               </Link>

               {isFav ? (
                  <button className="add-fav-button" onClick={handleFavorite}>
                     <p className="add-fav-title">
                        Added to Favorites
                        <br/>
                        <span className="add-fav-heart-red">❤️</span>
                     </p>
                  </button>
               ) : (
                  <button className="add-fav-button" onClick={handleFavorite}>
                     <p className="added-fav-title">
                        Add to Favorites
                        <br/>
                        <span className="add-fav-heart-white">🤍</span>
                     </p>
                  </button>
               )}
            </div>
         </div>
         <div>
            <button onClick={() => onClose(id)} className="card-close-btn">X</button>
         </div>
      </div>
   );
};

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      addFavorite: (props) => {
         dispatch(addFavorite(props));
      },  
      removeFavorite: (id) => {
         dispatch(removeFavorite(id));
      },
      getFavorites: (id) => {
         dispatch(getFavorites(id));
      }
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);


