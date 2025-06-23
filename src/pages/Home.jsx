import React, { useState, useEffect } from 'react';
import Cards from '../components/Cards.jsx';
import MakeRecipeModal from '../components/MakeRecipeModal.jsx';
import RecipeModal from '../components/RecipeModal.jsx';

function Home() {
  const [recepten, setRecepten] = useState(() => {
    const savedRecepten = localStorage.getItem('recepten');
    if (savedRecepten) {
      return JSON.parse(savedRecepten);
    }
    return []; // Return empty array as default when nothing in localStorage
  });
  
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
    if (recepten) { // Only save to localStorage if recepten is defined
      localStorage.setItem('recepten', JSON.stringify(recepten));
    }
  }, [recepten]);
  
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
  
  const handleAddRecipe = (newRecipe) => {
    setRecepten(prev => Array.isArray(prev) ? [...prev, newRecipe] : [newRecipe]);
  };

  const handleRemoveRecipe = (recipe) => {
    setRecepten(prev => prev.filter(r => r.title !== recipe.title));
  };
  useEffect(() => {
    const modal = document.getElementById('view-recipe-modal');
    if (isViewModalOpen && selectedRecipe && modal) {
      modal.showModal();
    }
  }, [isViewModalOpen, selectedRecipe]);

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
  
  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Recepten</h1>
      <Cards 
        cards={recepten} 
        onViewRecipe={handleViewRecipe} 
        onToggleFavorite={handleToggleFavorite} 
        favorites={favorites} 
      />      
      <MakeRecipeModal onAddRecipe={handleAddRecipe} />
      <RecipeModal 
        isOpen={isViewModalOpen}
        onClose={handleCloseViewModal}
        recipe={selectedRecipe}
        onToggleFavorite={handleToggleFavorite}
        favorites={favorites}
        onRemoveRecipe={handleRemoveRecipe}
      />
    </>
  );
}

export default Home;
