import { Search, X } from 'lucide-react'

function SearchBar({ query, onQueryChange }) {
  return (
    <label className="search-bar" aria-label="Buscar productos">
      <Search size={19} aria-hidden="true" />
      <input
        type="search"
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
        placeholder="¿Qué tecnología buscas hoy?"
      />
      {query && (
        <button
          type="button"
          className="icon-button search-clear"
          onClick={() => onQueryChange('')}
          aria-label="Limpiar búsqueda"
        >
          <X size={17} />
        </button>
      )}
    </label>
  )
}

export default SearchBar
