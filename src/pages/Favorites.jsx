import React, { useState, useEffect } from 'react';
import Cards from '../components/Cards.jsx';
import RecipeModal from '../components/RecipeModal.jsx';
import MakeRecipeModal from '../components/MakeRecipeModal.jsx';

function Favorites() {  const [favorites, setFavorites] = useState(() => {
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
  };  const handleToggleFavorite = (recipe) => {
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
  const handleRemoveRecipe = (recipe) => {
    try {
      // Verwijder uit favorieten
      setFavorites(prev => prev.filter(fav => fav.title !== recipe.title));

      // Update ook recepten in localStorage als het ook compleet verwijderd moet worden
      const savedRecepten = localStorage.getItem('recepten');
      if (savedRecepten) {
        const recepten = JSON.parse(savedRecepten);
        const updatedRecepten = recepten.filter(r => r.title !== recipe.title);
        localStorage.setItem('recepten', JSON.stringify(updatedRecepten));
      }
    } catch (error) {
      console.error("Fout bij het verwijderen van recept:", error);
    }
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
