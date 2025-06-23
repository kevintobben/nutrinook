import React, { useState, useEffect } from 'react';
import Cards from '../components/Cards.jsx';
import RecipeModal from '../components/RecipeModal.jsx';
import MakeRecipeModal from '../components/MakeRecipeModal.jsx';

function Favorites() {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      return JSON.parse(savedFavorites);
    }
    return [];
  });
  
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  
  useEffect(() => {
    if (favorites) {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  }, [favorites]);

  const handleViewRecipe = (recipe) => {
    setSelectedRecipe(recipe);
    setIsViewModalOpen(true);
  };
  
  const handleCloseViewModal = () => {
    setIsViewModalOpen(false);
  };
    const handleToggleFavorite = (recipe) => {
    setFavorites(prev => {
      const isFavorited = prev.some(fav => fav.title === recipe.title);
      if (isFavorited) {
        // Verwijder uit favorieten
        return prev.filter(fav => fav.title !== recipe.title);
      } else {
        // Voeg toe aan favorieten
        return [...prev, recipe];
      }
    });
  };

  const handleRemoveRecipe = (recipe) => {
    setFavorites(prev => prev.filter(fav => fav.title !== recipe.title));
  };

  const handleAddRecipe = (newRecipe) => {
    const savedRecepten = localStorage.getItem('recepten');
    let recepten = [];
    
    if (savedRecepten) {
      recepten = JSON.parse(savedRecepten);
    }
    
    recepten = Array.isArray(recepten) ? [...recepten, newRecipe] : [newRecipe];
    
    localStorage.setItem('recepten', JSON.stringify(recepten));
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Favorieten</h1>
      <Cards 
        cards={favorites} 
        onViewRecipe={handleViewRecipe} 
        onToggleFavorite={handleToggleFavorite} 
        favorites={favorites}
      />        
      <RecipeModal 
        isOpen={isViewModalOpen}
        onClose={handleCloseViewModal}
        recipe={selectedRecipe}
        onToggleFavorite={handleToggleFavorite}
        favorites={favorites}
        onRemoveRecipe={handleRemoveRecipe}
      />
      <MakeRecipeModal onAddRecipe={handleAddRecipe} />
    </>
  );
}

export default Favorites;
