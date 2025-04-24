import { useState, useEffect } from 'react'
import useFetchData from '../hooks/useFetchData'
import useNotification from '../hooks/useNotification'
import RecipeCard from '../components/RecipeCard'
import FilterPanel from '../components/FilterPanel'
import LoadingSpinner from '../components/LoadingSpinner'
import { Recipe } from '../Types/Recipe'

const Home = () => {
  const { data, loading, error } = useFetchData<{ recipes: Recipe[] }>(
    'https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza'
  )
  const { notify } = useNotification()

  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const [favorites, setFavorites] = useState<Recipe[]>(() => {
    const saved = localStorage.getItem('favoriteRecipes')
    return saved ? JSON.parse(saved) : []
  })
  const categories = Array.from(new Set(data?.recipes?.map(recipe => recipe.publisher) || []))


  const filteredRecipes = data?.recipes?.filter(recipe => {
    if (activeFilters.length === 0) return true
    return activeFilters.includes(recipe.publisher)
  }) || []


  const toggleFavorite = (recipe: Recipe) => {
    const isFavorite = favorites.some(fav => fav.id === recipe.id)

    if (isFavorite) {
      const updatedFavorites = favorites.filter(fav => fav.id !== recipe.id)
      setFavorites(updatedFavorites)
      notify(`${recipe.title} removida de favoritos`, 'info')
    } else {
      setFavorites([...favorites, recipe])
      notify(`${recipe.title} agregada a favoritos`, 'success')
    }
  }

  useEffect(() => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(favorites))
  }, [favorites])

  const toggleFilter = (category: string) => {
    setActiveFilters(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
  }

  if (loading) return <LoadingSpinner fullScreen message="Cargando recetas..." />
  if (error) return <div className="text-center py-8 text-red-500">{error}</div>

  return (
    <div className="max-w-4xl mx-auto">
    

      <FilterPanel
        categories={categories}
        activeFilters={activeFilters}
        onToggleFilter={toggleFilter}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredRecipes.map(recipe => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            isFavorite={favorites.some(fav => fav.id === recipe.id)}
            onToggleFavorite={toggleFavorite}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
