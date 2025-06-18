import React from 'react';

function IngredientForm({ newIngredient, handleIngredientChange, addIngredient }) {
  return (
    <div className="flex flex-wrap gap-2">
      <input
        type="text"
        name="amount"
        value={newIngredient.amount}
        onChange={handleIngredientChange}
        placeholder="Hoeveelheid"
        className="input input-bordered w-30"
      />
      <input
        type="text"
        name="unit"
        value={newIngredient.unit}
        onChange={handleIngredientChange}
        placeholder="Eenheid"
        className="input input-bordered w-30"
      />
      <input
        type="text"
        name="name"
        value={newIngredient.name}
        onChange={handleIngredientChange}
        placeholder="Ingrediënt"
        className="input input-bordered flex-1"
      />
      <button
        type="button"
        onClick={addIngredient}
        className="btn btn-primary"
      >
        Toevoegen
      </button>
    </div>
  );
}

export default IngredientForm;
