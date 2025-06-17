import React, { useState, useEffect } from 'react';
import Cards from '../components/Cards.jsx';
import RecipeModal from '../components/RecipeModal.jsx';

function Home() {
  const [recepten, setRecepten] = useState(() => {
    const savedRecepten = localStorage.getItem('recepten');
    if (savedRecepten) {
      return JSON.parse(savedRecepten);
    }
    return [];
  });
  
  useEffect(() => {
    localStorage.setItem('recepten', JSON.stringify(recepten));
  }, [recepten]);

  const handleViewRecipe = (recipe) => {
    console.log("Bekijk recept:", recipe);
  };
  
  const handleAddRecipe = (newRecipe) => {
    setRecepten(prev => [...prev, newRecipe]);
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Recepten</h1>
      <Cards cards={recepten} onViewRecipe={handleViewRecipe} />
      <RecipeModal onAddRecipe={handleAddRecipe} />
    </>
  );
}

export default Home;
