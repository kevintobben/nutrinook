import React from 'react';
import Cards from '../components/Cards.jsx';

function Home() {
  const recepten = [
    {
      title: "Spaghetti Carbonara",
      description: "Klassieke Italiaanse pasta met spek, ei en kaas. Een simpel maar heerlijk gerecht.",
      image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      cookingTime: "20 min",
      difficulty: "Gemakkelijk",
      servings: 4
    },
    {
      title: "Chicken Tikka Masala",
      description: "Romige Indiase curry met gemarineerde kip in een rijke tomatensaus.",
      image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      cookingTime: "45 min",
      difficulty: "Gemiddeld",
      servings: 6
    },
    {
      title: "Vegetarische Chili",
      description: "Heerlijke en vullende chili met bonen, groenten en specerijen. Perfect voor een koude dag.",
      image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      cookingTime: "30 min",
      difficulty: "Gemakkelijk",
      servings: 4
    },
    {
      title: "Vegetarische Chili",
      description: "Heerlijke en vullende chili met bonen, groenten en specerijen. Perfect voor een koude dag.",
      image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      cookingTime: "30 min",
      difficulty: "Gemakkelijk",
      servings: 4
    },
  ];

  const handleViewRecipe = (recipe) => {
    console.log("Bekijk recept:", recipe);
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Recepten</h1>
      <Cards cards={recepten} onViewRecipe={handleViewRecipe} />
    </>
  );
}

export default Home;
