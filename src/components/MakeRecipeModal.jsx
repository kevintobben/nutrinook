import React, { useState } from 'react';

function RecipeModal({ onAddRecipe }) {
  const [newRecipe, setNewRecipe] = useState({
    title: '',
    description: '',
    image: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp', // Default image
    cookingTime: '',
    difficulty: '',
    servings: 2
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewRecipe(prev => ({
      ...prev,
      [name]: name === 'servings' ? parseInt(value) || 0 : value
    }));
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
      servings: 2
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

          <div className="form-control">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="form-control">
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

            <div className="form-control">
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

            <div className="form-control">
              <label className="label">
                <span className="label-text">Aantal personen</span>
              </label>
              <input 
                type="number" 
                name="servings"
                value={newRecipe.servings}
                onChange={handleChange}
                min="1" 
                max="12" 
                className="input input-bordered" 
              />
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
    </dialog>
  );
}

export default RecipeModal;
