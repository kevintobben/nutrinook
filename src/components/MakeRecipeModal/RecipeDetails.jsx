import React from 'react';

function RecipeDetails({ recipe, handleChange, incrementServings, decrementServings }) {
  return (
    <>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Titel*</span>
        </label>
        <input 
          type="text" 
          name="title"
          value={recipe.title}
          onChange={handleChange}
          placeholder="Naam van het recept" 
          className="input input-bordered w-full" 
          required
        />
      </div>

      <div className="form-control grid grid-cols-1 md:grid-cols-1">
        <label className="label">
          <span className="label-text">Beschrijving*</span>
        </label>
        <textarea 
          name="description"
          value={recipe.description}
          onChange={handleChange}
          placeholder="Beschrijving van het recept" 
          className="textarea textarea-bordered h-24" 
          required
        />
      </div>
      
      <div className="form-control grid grid-cols-1 md:grid-cols-1">
        <label className="label">
          <span className="label-text">Bereidingstijd</span>
        </label>
        <input 
          type="text" 
          name="cookingTime"
          value={recipe.cookingTime}
          onChange={handleChange}
          placeholder="Bijv. 30 min" 
          className="input input-bordered" 
        />
      </div>

      <div className="form-control grid grid-cols-1 md:grid-cols-1">
        <label className="label">
          <span className="label-text">Moeilijkheidsgraad</span>
        </label>
        <select 
          name="difficulty"
          value={recipe.difficulty}
          onChange={handleChange}
          className="select select-bordered"
        >
          <option value="Gemakkelijk">Gemakkelijk</option>
          <option value="Gemiddeld">Gemiddeld</option>
          <option value="Moeilijk">Moeilijk</option>
        </select>
      </div>

      <div className="form-control grid grid-cols-1 md:grid-cols-1">
        <label className="label">
          <span className="label-text">Aantal personen</span>
        </label>
        <div className="flex items-center rounded-lg overflow-hidden border border-base-300">
          <button 
            type="button"
            onClick={decrementServings}
            className="btn btn-ghost px-4" 
            disabled={recipe.servings <= 1}
          >
            −
          </button>
          <div className="px-4 py-2 text-center">
            {recipe.servings}
          </div>
          <button 
            type="button"
            onClick={incrementServings}
            className="btn btn-ghost px-4"
            disabled={recipe.servings >= 6}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
}

export default RecipeDetails;
