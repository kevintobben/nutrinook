import React, { useState } from 'react';

function ImagePreview({ recipe, handleChange }) {
  const [imageMethod, setImageMethod] = useState('upload'); // 'upload' of 'url'
  const [previewUrl, setPreviewUrl] = useState(recipe.image || '');
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        const imageUrl = e.target.result;
        setPreviewUrl(imageUrl);
        // Stuur de base64 URL naar de parent component
        handleChange({
          target: {
            name: 'image',
            value: imageUrl
          }
        });
      };
      fileReader.readAsDataURL(file);
    }
  };
  
  const handleUrlChange = (e) => {
    const url = e.target.value;
    setPreviewUrl(url);
    handleChange(e);
  };
  
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">Afbeelding (optioneel)</span>
      </label>
      
      <div className="tabs tabs-boxed mb-4">
        <a 
          className={`tab ${imageMethod === 'upload' ? 'tab-active' : ''}`}
          onClick={() => setImageMethod('upload')}
        >
          Bestand uploaden
        </a>
        <a 
          className={`tab ${imageMethod === 'url' ? 'tab-active' : ''}`}
          onClick={() => setImageMethod('url')}
        >
          URL invoeren
        </a>
      </div>
      
      {imageMethod === 'upload' ? (
        <input 
          type="file" 
          accept="image/*"
          onChange={handleFileChange}
          className="file-input file-input-bordered w-full" 
        />
      ) : (
        <input 
          type="text" 
          name="image"
          value={recipe.image || ''}
          onChange={handleUrlChange}
          placeholder="URL van de afbeelding" 
          className="input input-bordered w-full" 
        />
      )}
      
      {previewUrl && (
        <div className="mt-4 card bg-base-200 p-4">
          <p className="text-xs text-base-content/70 mb-2">Voorbeeld:</p>
          <div className="avatar">
            <div className="w-24 rounded">
              <img 
                src={previewUrl} 
                alt="Voorbeeld" 
                onError={(e) => {
                  e.target.src = 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp';
                  setPreviewUrl(e.target.src);
                }}
              />
            </div>          </div>
        </div>
      )}
    </div>
  );
}

export default ImagePreview;
