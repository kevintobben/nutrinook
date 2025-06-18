import { useState } from 'react';

export function useRecipeForm() {
  const [newRecipe, setNewRecipe] = useState({
    title: '',
    description: '',
    image: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    cookingTime: '',
    difficulty: '',
    servings: 2,
    ingredients: []
  });

  const [newIngredient, setNewIngredient] = useState({
    amount: '',
    unit: '',
    name: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewRecipe(prev => ({
      ...prev,
      [name]: name === 'servings' ? parseInt(value) || 0 : value
    }));
  };

  const incrementServings = () => {
    setNewRecipe(prev => ({
      ...prev,
      servings: Math.min(prev.servings + 1, 12)
    }));
  };

  const decrementServings = () => {
    setNewRecipe(prev => ({
      ...prev,
      servings: Math.max(prev.servings - 1, 1)
    }));
  };

  const handleIngredientChange = (e) => {
    const { name, value } = e.target;
    setNewIngredient(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const addIngredient = () => {
    if (!newIngredient.name) {
      return;
    }
    
    setNewRecipe(prev => ({
      ...prev,
      ingredients: [...prev.ingredients, {...newIngredient}]
    }));
    
    // Reset ingredient inputs
    setNewIngredient({
      amount: '',
      unit: '',
      name: ''
    });
  };

  const removeIngredient = (index) => {
    setNewRecipe(prev => ({
      ...prev,
      ingredients: prev.ingredients.filter((_, i) => i !== index)
    }));
  };

  const toggleIngredientCheck = (index) => {
    setNewRecipe(prev => {
      const updatedIngredients = [...prev.ingredients];
      updatedIngredients[index] = {
        ...updatedIngredients[index],
        checked: !updatedIngredients[index].checked
      };
      return {
        ...prev,
        ingredients: updatedIngredients
      };
    });
  };

  const resetForm = () => {
    setNewRecipe({
      title: '',
      description: '',
      image: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
      cookingTime: '',
      difficulty: 'Gemakkelijk',
      servings: 2,
      ingredients: []
    });
  };

  return {
    newRecipe,
    newIngredient,
    handleChange,
    incrementServings,
    decrementServings,
    handleIngredientChange,
    addIngredient,
    removeIngredient,
    toggleIngredientCheck,
    resetForm
  };
}
