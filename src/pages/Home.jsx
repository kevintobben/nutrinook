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
  });
  
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  
  useEffect(() => {
    localStorage.setItem('recepten', JSON.stringify(recepten));
  }, [recepten]);

  const handleViewRecipe = (recipe) => {
    setSelectedRecipe(recipe);
    setIsViewModalOpen(true);
  };
  
  const handleCloseViewModal = () => {
    setIsViewModalOpen(false);
  };
  
  const handleAddRecipe = (newRecipe) => {
    setRecepten(prev => [...prev, newRecipe]);
  };
  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Recepten</h1>
      <Cards cards={recepten} onViewRecipe={handleViewRecipe} />
      <MakeRecipeModal onAddRecipe={handleAddRecipe} />
      <RecipeModal 
        isOpen={isViewModalOpen}
        onClose={handleCloseViewModal}
        recipe={selectedRecipe}
      />
    </>
  );
}

export default Home;
