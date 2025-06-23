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
      <select 
        name="unit"
        value={newIngredient.unit}
        onChange={handleIngredientChange}
        className="select select-bordered w-30"
      >
        <option value="">Eenheid</option>
        <option value="gram">Gram</option>
        <option value="ml">Milliliter</option>
        <option value="stuk">Stuk</option>
        <option value="theelepel">Theelepel</option>
        <option value="eetlepel">Eetlepel</option>
      </select>
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
