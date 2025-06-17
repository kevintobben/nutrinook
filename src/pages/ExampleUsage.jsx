import { useState } from 'react';
import Cards from '../components/Cards';
import RecipeModal from '../components/RecipeModal';

// Example component that uses both Cards and RecipeModal
function RecipesPage() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sample recipe data - replace with your actual data source
  const recipes = [
    {
      id: 1,
      title: "Pasta Carbonara",
      description: "Een klassiek Italiaans recept met romige eiersaus, pancetta en Parmezaanse kaas.",
      image: "https://example.com/carbonara.jpg",
      cookingTime: "30 min",
      difficulty: "Gemiddeld",
      servings: 4,
      ingredients: [
        { name: "spaghetti", amount: "400g" },
        { name: "pancetta of guanciale", amount: "150g" },
        { name: "Parmezaanse kaas, geraspt", amount: "100g" },
        { name: "eieren", amount: "4" },
        { name: "zwarte peper", amount: "naar smaak" },
      ],
      instructions: [
        "Kook de pasta volgens de aanwijzingen op de verpakking.",
        "Bak de pancetta of guanciale krokant in een pan.",
        "Klop in een kom de eieren met de kaas en peper.",
        "Giet de gekookte pasta af en voeg toe aan de pan met pancetta.",
        "Haal de pan van het vuur en roer snel het eimengsel erdoor.",
        "Serveer direct met extra geraspte kaas en zwarte peper."
      ],
      nutritionalInfo: {
        "Calorieën": "650 kcal",
        "Eiwitten": "30g",
        "Koolhydraten": "65g",
        "Vetten": "35g"
      },
      notes: "Voeg nooit room toe aan een authentieke carbonara. De romigheid komt van de eieren en kaas."
    },
    // Add more recipe objects here...
  ];

  const handleViewRecipe = (recipe) => {
    setSelectedRecipe(recipe);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-8">Alle Recepten</h1>
      
      {/* Cards component with recipes and handler for viewing a recipe */}
      <Cards 
        cards={recipes} 
        onViewRecipe={handleViewRecipe} 
      />
      
      {/* Recipe modal that shows when a recipe is selected */}
      <RecipeModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        recipe={selectedRecipe} 
      />
    </div>
  );
}

export default RecipesPage;
