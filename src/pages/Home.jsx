import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Cards from '../components/Cards.jsx';

function Home() {
  const recepten = [
    {
      title: "Spaghetti Carbonara",
      description: "Klassieke Italiaanse pasta met spek, ei en kaas. Een simpel maar heerlijk gerecht.",
      image: "/images/carbonara.jpg",
      cookingTime: "20 min",
      difficulty: "Gemakkelijk",
      servings: 4
    },
    {
      title: "Chicken Tikka Masala",
      description: "Romige Indiase curry met gemarineerde kip in een rijke tomatensaus.",
      image: "/images/tikka-masala.jpg",
      cookingTime: "45 min",
      difficulty: "Gemiddeld",
      servings: 6
    }
  ];

  const handleViewRecipe = (recipe) => {
    console.log("Bekijk recept:", recipe);
  };

  return (
    <>
      <Navbar />
      <div className="text-black p-4">Home</div>
      <Cards cards={recepten} onViewRecipe={handleViewRecipe} />
    </>
  );
}

export default Home;
