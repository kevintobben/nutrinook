import React from 'react';

function ImagePreview({ recipe, handleChange }) {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">Afbeelding URL (optioneel)</span>
      </label>
      <input 
        type="text" 
        name="image"
        value={recipe.image}
        onChange={handleChange}
        placeholder="URL van de afbeelding" 
        className="input input-bordered" 
      />
      {recipe.image && (
        <div className="mt-2">
          <p className="text-xs text-gray-500 mb-1">Voorbeeld:</p>
          <img 
            src={recipe.image} 
            alt="Voorbeeld" 
            className="h-20 object-cover rounded-md"
            onError={(e) => e.target.src = 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp'}
          />
        </div>
      )}
    </div>
  );
}

export default ImagePreview;
