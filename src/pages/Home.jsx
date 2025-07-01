import React, { useState, useEffect } from 'react';
import Cards from '../components/Cards.jsx';
import MakeRecipeModal from '../components/MakeRecipeModal.jsx';
import RecipeModal from '../components/RecipeModal.jsx';

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
}

function Home() {  const [recepten, setRecepten] = useState(() => {
    try {
      const savedRecepten = localStorage.getItem('recepten');
      if (savedRecepten) {
        return JSON.parse(savedRecepten);
      }
    } catch (error) {
      console.error("Fout bij het laden van recepten:", error);
    }
    return [];
  });
  
  const [favorites, setFavorites] = useState(() => {
    try {
      const savedFavorites = localStorage.getItem('favorites');
      if (savedFavorites) {
        return JSON.parse(savedFavorites); // array van IDs
      }
    } catch (error) {
      console.error("Fout bij het laden van favorieten:", error);
    }
    return [];
  });
  
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    useEffect(() => {
    if (recepten) { // Alleen opslaan als recepten gedefinieerd is
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
    // Voeg een uniek ID toe aan het recept
    const recipeWithId = { ...newRecipe, id: generateId() };
    setRecepten(prev => Array.isArray(prev) ? [...prev, recipeWithId] : [recipeWithId]);
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
      setFavorites(prev => {
        const isFavorited = prev.includes(recipe.id);
        if (isFavorited) {
          // Verwijder uit favorieten
          return prev.filter(id => id !== recipe.id);
        } else {
          // Voeg toe aan favorieten
          return [...prev, recipe.id];
        }
      });
    } catch (error) {
      console.error("Fout bij het toevoegen aan favorieten:", error);
      alert("Er ging iets mis bij het toevoegen aan favorieten. Probeer het opnieuw.");
    }
  };
  
  // Zoek de volledige recepten voor de favorieten
  const favoriteRecipes = recepten.filter(r => favorites.includes(r.id));
  
  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Recepten</h1>
      <Cards 
        cards={recepten} 
        onViewRecipe={handleViewRecipe} 
        onToggleFavorite={handleToggleFavorite} 
        favorites={favoriteRecipes} // geef de volledige recepten van favorieten door
      />      
      <MakeRecipeModal onAddRecipe={handleAddRecipe} />
      <RecipeModal 
        isOpen={isViewModalOpen}
        onClose={handleCloseViewModal}
        recipe={selectedRecipe}
        onToggleFavorite={handleToggleFavorite}
        favorites={favoriteRecipes}
        onRemoveRecipe={handleRemoveRecipe}
      />
    </>
  );
}

export default Home;
