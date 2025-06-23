import { X, Star, StarIcon, Trash } from "lucide-react";
import { useEffect } from "react";

function RecipeModal({ isOpen, onClose, recipe, onToggleFavorite, favorites, onRemoveRecipe }) {
  useEffect(() => {
    const modal = document.getElementById('view-recipe-modal');
    if (isOpen && recipe && modal) {
      modal.showModal();
    }
  }, [isOpen, recipe]);

  if (!recipe) return null;
  
  const handleClose = () => {
    if (onClose) onClose();
  };

  const handleRemoveRecipe = () => {
    if (onRemoveRecipe) {
      onRemoveRecipe(recipe);
      handleClose();
    }
  };

  return (
    <dialog id="view-recipe-modal" className="modal" onClose={handleClose}>
      <div className="modal-box w-11/12 max-w-4xl p-0 overflow-hidden">
        {/* Close button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-10 bg-white bg-opacity-70"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Recipe image header */}
        <div className="h-64 w-full relative">
          <img 
            src={recipe.image} 
            alt={recipe.title} 
            className="w-full h-full object-cover"
          />        </div>

        {/* Recipe content */}        <div className="p-6">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-3xl font-bold">{recipe.title}</h2>
            
            <button 
              className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                onToggleFavorite && onToggleFavorite(recipe);
              }}
            >
              {favorites && favorites.some(fav => fav.title === recipe.title) ? (
                <StarIcon className="h-6 w-6 text-yellow-500 fill-yellow-500" />
              ) : (
                <Star className="h-6 w-6 text-yellow-500" />
              )}
            </button>
          </div>
          
          {/* Recipe meta information */}
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600">
            {recipe.cookingTime && (
              <span className="flex items-center gap-1">
                ⏱️ Bereidingstijd: {recipe.cookingTime}
              </span>
            )}
            {recipe.difficulty && (
              <span className="flex items-center gap-1">
                📊 Moeilijkheidsgraad: {recipe.difficulty}
              </span>
            )}
            {recipe.servings && (
              <span className="flex items-center gap-1">
                👥 Porties: {recipe.servings} personen
              </span>
            )}
          </div>

          {/* Recipe description */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Beschrijving</h3>
            <p className="text-gray-700">{recipe.description}</p>
          </div>

          {/* Ingredients section */}
          {recipe.ingredients && recipe.ingredients.length > 0 && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Ingrediënten</h3>
              <ul className="list-disc pl-5 space-y-1">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="text-gray-700">
                    {ingredient.amount && <span className="font-medium">{ingredient.amount} </span>}
                    {ingredient.name}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Instructions section */}
          {recipe.instructions && recipe.instructions.length > 0 && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Bereidingswijze</h3>
              <ol className="list-decimal pl-5 space-y-3">
                {recipe.instructions.map((step, index) => (
                  <li key={index} className="text-gray-700">{step}</li>
                ))}
              </ol>
            </div>
          )}
          {/* Remove recipe button */}
          <div className="flex justify-center space-x-4 mt-6">
            <button className="btn btn-error" onClick={handleRemoveRecipe}>
              <Trash className="h-6 w-6" />
                Verwijder recept
            </button>
          </div>

        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button onClick={handleClose}>Sluiten</button>
      </form>
    </dialog>
  );
}

export default RecipeModal;
