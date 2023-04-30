import React, { useEffect, useState } from "react";
import styles from "./DetailStyles.module.css";
import { getRecipeDetail } from "../../redux/actions";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    getRecipeDetail(id).then((response) => {
      setRecipe(response.data);
    });
  }, [id]);

  if (!recipe) {
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
              <div>
              <img className={styles.detailImg} src={recipe.image} alt="recipe" width={400} height={300}/>
              </div>
              <div className={styles.detailInfo}>
              <p className={styles.detailName}><span>Name</span> <br></br> {toTitleCase(recipe.name)}</p>
              <p className={styles.detailResume}><span>Resume</span><br></br> {recipe.plate_resume}</p>
              <p className={styles.detailSteps}><span>Steps</span><br></br> {recipe.step_to_step}</p>
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
