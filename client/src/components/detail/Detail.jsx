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

  return (
    <div className={styles.detailContainer}>
      <h1>Soy el Detail</h1>
      <p>Name: {recipe.name}</p>
      <p>Resume: {recipe.plate_resume}</p>
      <p>Steps: {recipe.step_to_step}</p>

      <Link to={`/home`}>
                  <p className={styles.cardSeeDetails}>Home</p>
                </Link>
    </div>

  );
};

export default Detail;
