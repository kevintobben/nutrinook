import React from 'react';
import Cards from '../components/Cards.jsx';

function Favorites() {
  const recepten = [
    {
      title: "Pasta Penne Arrabbiata",
      description: "Pasta met een pittige tomatensaus, knoflook en rode peper. Een klassieker uit de Italiaanse keuken.",
      image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      cookingTime: "20 min",
      difficulty: "Gemakkelijk",
      servings: 2,
    },
    {
      title: "Kogelbiefstuk met Groenten",
      description: "Perfect gebakken kogelbiefstuk geserveerd met seizoensgebonden groenten en een rode wijnsaus.",
      image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      cookingTime: "20 min",
      difficulty: "Makkelijk",
      servings: 2
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

export default Favorites;
