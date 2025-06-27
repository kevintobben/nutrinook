import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function RecipeDetail() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const savedRecepten = localStorage.getItem('recepten');
        if (savedRecepten) {
            setRecipe(JSON.parse(savedRecepten)[id]);
        }
    }, [id]);

    if (!recipe) {
        return <div>Recept niet gevonden</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">{recipe.title}</h1>
            <p className="text-gray-600 mb-4">{recipe.description}</p>
            <p className="text-gray-600 mb-4">Aantal personen: {recipe.servings}</p>
            <p className="text-gray-600 mb-4">Moeilijkheidsgraad: {recipe.difficulty}</p>
            <p className="text-gray-600 mb-4">Bereidingstijd: {recipe.cookingTime}</p>
            <p className="text-gray-600 mb-4">Ingrediënten: {recipe.ingredients.join(', ')}</p>
            <p className="text-gray-600 mb-4">Bereidingswijze: {recipe.instructions}</p>
        </div>
    );
}

export default RecipeDetail;
