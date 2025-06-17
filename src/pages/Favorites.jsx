import React, { useState, useEffect } from 'react';
import Cards from '../components/Cards.jsx';
import RecipeModal from '../components/RecipeModal.jsx';

function Favorites() {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      return JSON.parse(savedFavorites);
    }
    return []; // Return empty array as default
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
        // Remove from favorites
        return prev.filter(fav => fav.title !== recipe.title);
      } else {
        // Add to favorites
        return [...prev, recipe];
      }
    });
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Favorieten</h1>
      <Cards 
        cards={favorites} 
        onViewRecipe={handleViewRecipe} 
        onToggleFavorite={handleToggleFavorite} 
        favorites={favorites}
      />      <RecipeModal 
        isOpen={isViewModalOpen}
        onClose={handleCloseViewModal}
        recipe={selectedRecipe}
        onToggleFavorite={handleToggleFavorite}
        favorites={favorites}
      />
    </>
  );
}

export default Favorites;
