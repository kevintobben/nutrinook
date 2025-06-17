import React, { useState } from 'react';

function MakeRecipeModal({ onAddRecipe }) {
  const [newRecipe, setNewRecipe] = useState({
    title: '',
    description: '',
    image: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp', // Default image
    cookingTime: '',
    difficulty: '',
    servings: 2,
    ingredients: []
  });

  const [newIngredient, setNewIngredient] = useState({
    amount: '',
    unit: '',
    name: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewRecipe(prev => ({
      ...prev,
      [name]: name === 'servings' ? parseInt(value) || 0 : value
    }));
  };

  const incrementServings = () => {
    setNewRecipe(prev => ({
      ...prev,
      servings: Math.min(prev.servings + 1, 12) // Maximum 12 servings
    }));
  };

  const decrementServings = () => {
    setNewRecipe(prev => ({
      ...prev,
      servings: Math.max(prev.servings - 1, 1) // Minimum 1 serving
    }));
  };

  const handleIngredientChange = (e) => {
    const { name, value } = e.target;
    setNewIngredient(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const addIngredient = () => {
    // Validate that at least name is provided
    if (!newIngredient.name) {
      return;
    }
    
    setNewRecipe(prev => ({
      ...prev,
      ingredients: [...prev.ingredients, {...newIngredient}]
    }));
    
    // Reset ingredient inputs
    setNewIngredient({
      amount: '',
      unit: '',
      name: ''
    });
  };

  const removeIngredient = (index) => {
    setNewRecipe(prev => ({
      ...prev,
      ingredients: prev.ingredients.filter((_, i) => i !== index)
    }));
  };

  const toggleIngredientCheck = (index) => {
    setNewRecipe(prev => {
      const updatedIngredients = [...prev.ingredients];
      updatedIngredients[index] = {
        ...updatedIngredients[index],
        checked: !updatedIngredients[index].checked
      };
      return {
        ...prev,
        ingredients: updatedIngredients
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!newRecipe.title || !newRecipe.description) {
      alert('Vul alle verplichte velden in!');
      return;
    }

    // Call the parent function to add the recipe
    onAddRecipe(newRecipe);
    
    // Close the modal
    document.getElementById('create-recipe-modal').close();
    
    // Reset the form
    setNewRecipe({
      title: '',
      description: '',
      image: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
      cookingTime: '',
      difficulty: 'Gemakkelijk',
      servings: 2,
      ingredients: []
    });
  };

  return (
    <dialog id="create-recipe-modal" className="modal">
      <div className="modal-box w-11/12 max-w-3xl">
        <h3 className="font-bold text-lg mb-4">Nieuw Recept Toevoegen</h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Titel*</span>
            </label>
            <input 
              type="text" 
              name="title"
              value={newRecipe.title}
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
              value={newRecipe.description}
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
              value={newRecipe.cookingTime}
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
              value={newRecipe.difficulty}
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
                disabled={newRecipe.servings <= 1}
              >
                −
              </button>
              <div className="px-4 py-2 text-center">
                {newRecipe.servings}
              </div>
              <button 
                type="button"
                onClick={incrementServings}
                className="btn btn-ghost px-4"
                disabled={newRecipe.servings >= 6}
              >
                +
              </button>
            </div>
          </div>

          <div className="form-control grid grid-cols-1">
            <label className="label">
              <span className="label-text">Ingrediënten</span>
            </label>
            
            {/* Ingredient list */}
            <div className="mb-4">
              {newRecipe.ingredients.length > 0 ? (
                <div className="bg-base-200 rounded-lg p-2 mb-3">
                  {newRecipe.ingredients.map((ingredient, index) => (
                    <div key={index} className="flex items-center mb-2 bg-base-100 rounded p-2">
                      <input
                        type="checkbox"
                        className="checkbox mr-2"
                        checked={ingredient.checked || false}
                        onChange={() => toggleIngredientCheck(index)}
                      />
                      <div className="flex-1 flex">
                        <span className="font-medium mr-1">{ingredient.amount}</span>
                        <span className="mr-1">{ingredient.unit}</span>
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
              ) : (
                <div className="text-base-content/70 text-sm italic mb-2">
                  Nog geen ingrediënten toegevoegd
                </div>
              )}
            </div>
            
            {/* Add ingredient inputs */}
            <div className="flex flex-wrap gap-2">
              <input
                type="text"
                name="amount"
                value={newIngredient.amount}
                onChange={handleIngredientChange}
                placeholder="Hoeveelheid"
                className="input input-bordered w-24"
              />
              <input
                type="text"
                name="unit"
                value={newIngredient.unit}
                onChange={handleIngredientChange}
                placeholder="Eenheid"
                className="input input-bordered w-24"
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
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Afbeelding URL (optioneel)</span>
            </label>
            <input 
              type="text" 
              name="image"
              value={newRecipe.image}
              onChange={handleChange}
              placeholder="URL van de afbeelding" 
              className="input input-bordered" 
            />
            {newRecipe.image && (
              <div className="mt-2">
                <p className="text-xs text-gray-500 mb-1">Voorbeeld:</p>
                <img 
                  src={newRecipe.image} 
                  alt="Voorbeeld" 
                  className="h-20 object-cover rounded-md"
                  onError={(e) => e.target.src = 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp'}
                />
              </div>
            )}
          </div>

          <div className="modal-action">
            <button type="button" className="btn" onClick={() => document.getElementById('create-recipe-modal').close()}>Annuleren</button>
            <button type="submit" className="btn btn-primary">Recept Toevoegen</button>
          </div>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>Sluiten</button>
      </form>
    </dialog>  );
}

export default MakeRecipeModal;
