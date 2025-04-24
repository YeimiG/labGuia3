import { Recipe } from '../Types/Recipe'

interface RecipeCardProps {
  recipe: Recipe
  isFavorite: boolean
  onToggleFavorite: (recipe: Recipe) => void
}

const RecipeCard = ({ recipe, isFavorite, onToggleFavorite }: RecipeCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row hover:shadow-lg transition-shadow">
      <img
        src={recipe.image_url}
        alt={recipe.title}
        className="w-full md:w-1/3 h-48 md:h-auto object-cover"
      />
      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">{recipe.title}</h3>
          <p className="text-sm text-gray-600 mb-4">
            Categoria: 
            <span className="ml-1 font-medium text-black-700">{recipe.publisher}</span>
          </p>
        </div>
        <button
          onClick={() => onToggleFavorite(recipe)}
          className={`mt-4 md:mt-0 px-4 py-2 rounded-lg font-medium transition-colors ${
            isFavorite
              ? 'bg-red-500 hover:bg-red-600 text-white'
              : 'bg-red-500 hover:bg-orange-600 text-white'
          }`}
        >
          {isFavorite ? '★ Quitar de favoritos' : '☆ Agregar a favoritos'}
        </button>
      </div>
    </div>
  )
}

export default RecipeCard