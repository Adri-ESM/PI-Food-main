import React, { useState } from 'react';
import styles from './FormStyles.module.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Image from '../../../images/fruits-vegetables.jpg';
import { createRecipe } from '../../../redux/actions.js';
import ReactModal from 'react-modal';

export default function Form() {
  const [name, setName] = useState('');
  const [plate_resume, setPlateResume] = useState('');
  const [health_score, setHealthScore] = useState('');
  const [step_to_step, setSteps] = useState('');
  const [image, setImage] = useState('');
  // const [selectedDiets, setSelectedDiets] = useState([]);
  const [diets, setSelectedDiet] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [names, setNames] = useState([]);


  const resetForm = () => {
    setName('');
    setPlateResume('');
    setHealthScore('');
    setSteps('');
    setImage('');
    // setSelectedDiets([]);
    setSelectedDiet('');
  };

  const handleModalClose = () => {
    setShowModal(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      name,
      plate_resume,
      health_score,
      step_to_step,
      image,
      diets,
      // selectedDiets
    };

    setShowModal(true);
    // Validar los campos del formulario
    const formErrors = {};

    if (names.includes(name)) {
      alert('This name has already been used');
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
      alert('The name can only contain letters and spaces');
    } else {
      names.push(name);
      setNames(names);
    }

  

    if (!/^[0-9]+$/.test(health_score)) {
      formErrors.health_score = 'The health score only can contain numbers';
    }

    if (Object.keys(formErrors).length > 0) {
      //setErrors(formErrors);
      return;
    }

    const recipeData = JSON.parse(localStorage.getItem('recipes')) || [];
    recipeData.push(newRecipe);
    localStorage.setItem('recipes', JSON.stringify(recipeData));
    try {
      const response = createRecipe(newRecipe);
      console.log(response);
      setShowSuccessMessage(true); // Muestra mensaje de éxito de envío de formulario.
      resetForm();
    } catch (error) {
      console.error(error);
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  // const handlePlateResumeChange = (event) => {
  //   setPlateResume(event.target.value);
  // };
  const handlePlateResumeChange = (event) => {
    const value = event.target.value;
      if (value.length <= 255) {
        setPlateResume(value);
      } else {
        alert('Resume must be less than or equal to 255 characters');
      }
  };

  const handleHealthScoreChange = (event) => {
    setHealthScore(event.target.value);
  };

  // const handleStepsChange = (event) => {
  //   setSteps(event.target.value);
  // };
  const handleStepsChange = (event) => {
    const value = event.target.value;
      if (value.length <= 255) {
        setSteps(value);
      } else {
        alert('Step to step must be less than or equal to 255 characters');
      }
  };

  const handleImageChange = (event) => {
    setImage(event.target.value);
  };

  const handleDiet = (event) => {
    console.log(event.target.value);
    setSelectedDiet(event.target.value);
  };


  return (
    <div>
      {showSuccessMessage && (
      <div className={styles.successMessage}>
        The recipe was created successfully.
      </div>
      )}
       <img src={Image} alt="fruits and vegetables" className={styles.formImageContainer}></img> 
    <form className={styles.formContainer} method='post' onSubmit={handleSubmit}>
      <label className={styles.formName}>
        Recipe Name
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <br />
      <label className={styles.formResume}>
        Plate Resume
        <textarea value={plate_resume} onChange={handlePlateResumeChange} />
      </label>
      <br />
      <label className={styles.formHealth}>
        Health Score
        <input type="number" min="0" max="9999" value={health_score} onChange={handleHealthScoreChange} />
      </label>
      <br />
      <label className={styles.formStep}>
        Steps
        <textarea value={step_to_step} onChange={handleStepsChange} />
      </label>
      <br />
      <label className={styles.formImage}>
        Image
        <input type="text" value={image} onChange={handleImageChange} />
      </label>
      <br />
      <label className={styles.formDiets}>
        Diets:
          <select onChange={handleDiet}>
            <option value="">Select diet</option>
            <option value="dairy free">dairy free</option>
            <option value="gluten free">gluten free</option>
            <option value="vegan">vegan</option>
            <option value="whole 30">whole 30</option>
            <option value="vegetarian">vegetarian</option>
            <option value="lacto ovo vegetarian">lacto ovo vegetarian</option>
            <option value="paleolithic">paleolithic</option>
        
          </select>
      </label>
      <br />
      <button className={styles.formButtonCreate} type="submit">Create recipe</button>
    </form>

    <div className={styles.formLinkHome}>
        <Link to='/home'>Home</Link>
      </div>

      <ReactModal  isOpen={showModal} onRequestClose={handleModalClose}>
        <div className={styles.formModal}>
          <h2>Recipe Created!</h2>
          <button onClick={handleModalClose} className={styles.buttonModal}>Close</button>
        </div>
      </ReactModal>
    </div>
  );
}

  

