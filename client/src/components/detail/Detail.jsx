import React from "react";
import styles from "./DetailStyles.module.css";
import { getRecipesByName } from "../../redux/actions";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Detail = () => {
    const { id } = useParams();
    const [card, setCard] = useState(null);
  
    useEffect(() => {
      getRecipesByName(id).then((response) => {
        setCard(response.data[0]);
      });
    }, [id]);
  
    if (!card) {
      return <div>Loading...</div>;
    }

    return (
        <div className={styles.detailContainer }>
            <h1>Soy el Detail</h1>
       

          </div>
    );
};

export default Detail;



// const { recipeName } = useParams();


    // const [title, setTitle] = useState({});
    // const [isLoading, setIsLoading] = useState(true);
   

    // const fetchData = async () => {
    //   try {
    //     const response = await fetch(`https://api-pi-food-main.onrender.com/recipes/name?name=${recipeName}`);
    //     const data = await response.json();
    //     setTitle(data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
   
    // useEffect(() => {
    //   fetchData()    
    // }, [recipeName]);

 /* {title.name ? (
          <>
            <div className={styles.detailCard }>
            <div className={styles.info}>
            <h2>Name: {title.name}</h2>  
            <h3>Step to Step: {title.step_to_step}</h3> 
            <h3>Health Score: {title.health_score}</h3> 
            </div>
            <div className={styles.detailImage}>
            <img src={title.image} alt="img" />  
            </div> */
            /* </div>
            
          </>
        ) : (
            <h3>Loading...</h3>
        )} */