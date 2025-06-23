import React from 'react';

function IngredientList({ ingredients, toggleIngredientCheck, removeIngredient }) {
  if (ingredients.length === 0) {
    return (
      <div className="text-base-content/70 text-sm italic mb-2">
        Nog geen ingrediënten toegevoegd
      </div>
    );
  }

  return (
    <div className="bg-base-200 rounded-lg p-2 mb-3">
      {ingredients.map((ingredient, index) => (
        <div key={index} className="flex items-center mb-2 bg-base-100 rounded p-2">
          <input
            type="checkbox"
            className="checkbox mr-2"
            checked={ingredient.checked || false}
            onChange={() => toggleIngredientCheck(index)}
          />
          <div className="flex-1 flex">
            {ingredient.amount && <span className="font-medium mr-1">{ingredient.amount}</span>}
            {ingredient.unit && <span className="mr-1">{ingredient.unit}</span>}
            <span className="flex-1">{ingredient.name}</span>
          </div>
          <button 
            type="button"
            onClick={() => removeIngredient(index)}
            className="btn btn-ghost btn-xs text-error"
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
}

export default IngredientList;
