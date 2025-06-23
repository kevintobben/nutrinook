import React, { useState, useEffect } from 'react';
import Cards from '../components/Cards.jsx';
import MakeRecipeModal from '../components/MakeRecipeModal.jsx';
import RecipeModal from '../components/RecipeModal.jsx';

function Home() {  const [recepten, setRecepten] = useState(() => {
    try {
      const savedRecepten = localStorage.getItem('recepten');
      if (savedRecepten) {
        return JSON.parse(savedRecepten);
      }
    } catch (error) {
      console.error("Fout bij het laden van recepten:", error);
    }
    return []; // Return empty array as default when nothing in localStorage or on error
  });
  
  const [favorites, setFavorites] = useState(() => {
    try {
      const savedFavorites = localStorage.getItem('favorites');
      if (savedFavorites) {
        return JSON.parse(savedFavorites);
      }
    } catch (error) {
      console.error("Fout bij het laden van favorieten:", error);
    }
    return [];
  });
  
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    useEffect(() => {
    if (recepten) { // Only save to localStorage if recepten is defined
      try {
        localStorage.setItem('recepten', JSON.stringify(recepten));
      } catch (error) {
        console.error("Fout bij het opslaan van recepten:", error);
      }
    }
  }, [recepten]);
  
  useEffect(() => {
    if (favorites) {
      try {
        localStorage.setItem('favorites', JSON.stringify(favorites));
      } catch (error) {
        console.error("Fout bij het opslaan van favorieten:", error);
      }
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
    // Verwijder uit recepten
    setRecepten(prev => prev.filter(r => r.title !== recipe.title));
    
    // Verwijder ook uit favorieten als het daar in zit
    setFavorites(prev => prev.filter(f => f.title !== recipe.title));
  };
  useEffect(() => {
    const modal = document.getElementById('view-recipe-modal');
    if (isViewModalOpen && selectedRecipe && modal) {
      modal.showModal();
    }
  }, [isViewModalOpen, selectedRecipe]);
  const handleToggleFavorite = (recipe) => {
    try {
      // Maak een simpelere kopie van het recept om op te slaan (minder data)
      const simpleRecipe = {
        title: recipe.title,
        description: recipe.description,
        image: recipe.image,
        cookingTime: recipe.cookingTime,
        difficulty: recipe.difficulty,
        servings: recipe.servings,
        ingredients: recipe.ingredients
      };

      setFavorites(prev => {
        const isFavorited = prev.some(fav => fav.title === recipe.title);
        if (isFavorited) {
          // Verwijder uit favorieten
          return prev.filter(fav => fav.title !== recipe.title);
        } else {
          // Voeg toe aan favorieten
          return [...prev, simpleRecipe];
        }
      });
    } catch (error) {
      console.error("Fout bij het toevoegen aan favorieten:", error);
      alert("Er ging iets mis bij het toevoegen aan favorieten. Probeer het opnieuw.");
    }
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
