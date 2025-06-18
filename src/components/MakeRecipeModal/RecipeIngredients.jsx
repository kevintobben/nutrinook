import React from 'react';
import IngredientList from './IngredientList';
import IngredientForm from './IngredientForm';

function RecipeIngredients({ 
  ingredients, 
  newIngredient, 
  handleIngredientChange, 
  addIngredient, 
  removeIngredient, 
  toggleIngredientCheck 
}) {
  return (
    <div className="form-control grid grid-cols-1">
      <label className="label">
        <span className="label-text">Ingrediënten</span>
      </label>
      
      {/* Ingredient list */}
      <div className="mb-4">
        <IngredientList 
          ingredients={ingredients} 
          toggleIngredientCheck={toggleIngredientCheck}
          removeIngredient={removeIngredient}
        />
      </div>
      
      {/* Add ingredient inputs */}
      <IngredientForm
        newIngredient={newIngredient}
        handleIngredientChange={handleIngredientChange}
        addIngredient={addIngredient}
      />
    </div>
  );
}

export default RecipeIngredients;
