function Cards({ cards, onViewRecipe }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {cards.map((card, index) => (
        <div key={index} className="card bg-base-100 w-full max-w-96 shadow-lg hover:shadow-xl transition-shadow">
          <figure className="h-48 overflow-hidden">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-lg font-bold">{card.title}</h2>
            <p className="text-sm text-gray-600 line-clamp-3">{card.description}</p>
            
            {/* Recepten specifieke info */}
            <div className="flex gap-4 text-xs text-gray-500 mt-2">
              {card.cookingTime && (
                <span className="flex items-center gap-1">
                  ⏱️ {card.cookingTime}
                </span>
              )}
              {card.difficulty && (
                <span className="flex items-center gap-1">
                  📊 {card.difficulty}
                </span>
              )}
              {card.servings && (
                <span className="flex items-center gap-1">
                  👥 {card.servings} personen
                </span>
              )}
            </div>
            
            <div className="card-actions justify-end mt-4">
              <button 
                className="btn btn-primary"
                onClick={() => onViewRecipe && onViewRecipe(card)}
              >
                Bekijk Recept
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;