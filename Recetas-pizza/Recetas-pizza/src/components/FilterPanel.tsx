interface FilterPanelProps {
    categories: string[]
    activeFilters: string[]
    onToggleFilter: (category: string) => void
  }

  const FilterPanel = ({ categories, activeFilters, onToggleFilter }: FilterPanelProps) => {
    return (
      <div className="bg-red-100 p-4 rounded-lg mb-6 sticky top-2">
        <h3 className="text-lg font-semibold mb-3">Filtrar por categoría</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => onToggleFilter(category)}
              className={`px-3 py-1 rounded-full text-sm ${
                activeFilters.includes(category)
                  ? 'bg-red-600 text-white'
                  : 'bg-white text-black-800 border border-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    )
  }

export default FilterPanel