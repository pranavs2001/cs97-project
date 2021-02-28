import React from 'react';
import Modal from 'react-modal';
import styles from './recipewindow.css';


// Modal.setAppElement(document.getElementById('root'))

function ListIngredients(props) {
  return (
    Object.keys(props.ingredients).map((name, index) =>
      <li key={index}>{name}: {props.ingredients[name]}</li>
    )
  )
}

function RecipeWindow(props) {

  if (props.loaded == false) {
    return (
      <p>Loading Recipe...</p>
    )
  } else {
    return (
      <Modal
        isOpen={props.isOpen}
        onAfterOpen={props.afterOpen}
        onRequestClose={props.closeModal}
        animationType="fade"
        transparent={true}
        contentLabel="Recipe Info"
      >
        <button className="button-style" onClick={props.closeModal}>← Close</button>
        <h1>{props.recipe.name}</h1>
        <h4>Category: {props.recipe.category}</h4>
        <h4>Area: {props.recipe.area}</h4>
        <h4>Ingredients:</h4>
        <ListIngredients ingredients={props.recipe.ingredients}/>
        <h4>Steps:</h4>
        <p class="steps">{props.recipe.instructions}</p>
      </Modal>
    );
  }

}

export default RecipeWindow;