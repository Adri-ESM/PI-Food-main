import React, { useEffect, useState } from "react";
import styles from "./DetailStyles.module.css";
import { getRecipeDetail } from "../../redux/actions";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Detail = () => {
  const { id, diet } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    getRecipeDetail(id, diet).then((response) => {
      setRecipe(response.data);
    });
  }, [id, diet]);

  if (!recipe && !diet) {
    return <div>Loading...</div>;
  }

  function toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }
  return (
    <div>
    <div className={styles.detailContainer}>
          <div className={styles.detailInfo}>
          <p className={styles.detailName}>{recipe.id}</p>
              <img className={styles.detailImg} src={recipe.image} alt="recipe" width={400} height={300}/>
              {recipe && recipe.name && (
            <p className={styles.detailName}>
              <span>Name</span> <br></br> {toTitleCase(recipe.name)}
            </p>
              )}
  
              <p className={styles.detailSteps}><span>Resume</span><br></br> {recipe.plate_resume}</p>
              <p className={styles.detailSteps}><span>Healt Score</span><br></br> {recipe.health_score}</p>
              <p className={styles.detailSteps}><span>Steps</span><br></br> {recipe.steps}</p>
              <p className={styles.detailSteps}><span>Tipe of Diets</span><br></br> {recipe.diet}</p>
          </div>
          </div>
          <div>
        <Link className={styles.buttonHome} to={`/home`}>
           Home
        </Link>
        </div>
        </div>

  );
};

export default Detail;
