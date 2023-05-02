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
            <div>
              <p className={styles.detailId}>{recipe.id}</p>
          </div>
          <div>
              <img className={styles.detailImg} src={recipe.image} alt="recipe" width={400} height={300}/>
          </div>
            
              {recipe && recipe.name && (
            <p className={styles.detailName}>
              <span>Name</span> <br></br> {toTitleCase(recipe.name)}
            </p>
              )}
            <div className={styles.detailInfo2}>
              <p className={styles.detailSteps}><span>Resume</span><br></br> {recipe.plate_resume}</p>
              <p className={styles.detailSteps}><span>Steps</span><br></br> {recipe.steps}</p>
            </div>
            <div className={styles.detailInfo3}>
              <p className={styles.detailSteps}><span>Healt Score</span><br></br> {recipe.health_score}</p>
              <p className={styles.detailSteps}><span>Tipe of Diets</span><br></br> {recipe.diet}</p>
            </div>
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
