import React from 'react';
import { 
  // RecipeBasicInfo,
  RecipeDetails,
  RecipeIngredients,
  ImagePreview,
  useRecipeForm
} from './MakeRecipeModal/index';

function MakeRecipeModal({ onAddRecipe }) {
  const {
    newRecipe,
    newIngredient,
    handleChange,
    incrementServings,
    decrementServings,
    handleIngredientChange,
    addIngredient,
    removeIngredient,
    toggleIngredientCheck,
    resetForm
  } = useRecipeForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!newRecipe.title || !newRecipe.description) {
      alert('Vul alle verplichte velden in!');
      return;
    }

    onAddRecipe(newRecipe);
    
    document.getElementById('create-recipe-modal').close();
    resetForm();
  };

  return (
    <dialog id="create-recipe-modal" className="modal">
      <div className="modal-box w-11/12 max-w-3xl">
        <h3 className="font-bold text-lg mb-4">Nieuw Recept Toevoegen</h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <RecipeDetails 
            recipe={newRecipe}
            handleChange={handleChange}
            incrementServings={incrementServings}
            decrementServings={decrementServings}
          />

          <RecipeIngredients 
            ingredients={newRecipe.ingredients}
            newIngredient={newIngredient}
            handleIngredientChange={handleIngredientChange}
            addIngredient={addIngredient}
            removeIngredient={removeIngredient}
            toggleIngredientCheck={toggleIngredientCheck}
          />

          <ImagePreview 
            recipe={newRecipe} 
            handleChange={handleChange}
          />

          <div className="modal-action">
            <button 
              type="button" 
              className="btn" 
              onClick={() => document.getElementById('create-recipe-modal').close()}
            >
              Annuleren
            </button>
            <button 
              type="submit" 
              className="btn btn-primary"
            >
              Recept Toevoegen
            </button>
          </div>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>Sluiten</button>
      </form>
    </dialog>
  );
}

export default MakeRecipeModal;
