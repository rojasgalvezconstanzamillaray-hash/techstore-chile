import { useEffect, useMemo, useState } from 'react'
import { ChevronDown, Heart, SlidersHorizontal, Sparkles } from 'lucide-react'
import productos from './data/productos.json'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import ProductList from './components/ProductList'
import Sidebar from './components/Sidebar'
import BenefitBar from './components/BenefitBar'
import Footer from './components/Footer'
import LoginModal from './components/LoginModal'
import Toast from './components/Toast'

const getStoredValue = (key, fallback) => {
  try {
    const value = localStorage.getItem(key)
    return value ? JSON.parse(value) : fallback
  } catch {
    return fallback
  }
}

function App() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('Todos')
  const [sortBy, setSortBy] = useState('featured')
  const [cart, setCart] = useState(() => getStoredValue('techstore-cart', []))
  const [favorites, setFavorites] = useState(() => getStoredValue('techstore-favorites', []))
  const [theme, setTheme] = useState(() => getStoredValue('techstore-theme', 'light'))
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [toast, setToast] = useState('')

  const categories = useMemo(
    () => ['Todos', ...new Set(productos.map((product) => product.category))],
    [],
  )

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    const matches = productos.filter((product) => {
      const matchesCategory = category === 'Todos' || product.category === category
      const searchableText = `${product.name} ${product.description} ${product.category}`.toLowerCase()
      return matchesCategory && searchableText.includes(normalizedQuery)
    })

    return [...matches].sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price
      if (sortBy === 'price-desc') return b.price - a.price
      if (sortBy === 'rating') return b.rating - a.rating
      return a.id - b.id
    })
  }, [category, query, sortBy])

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0)

  useEffect(() => {
    localStorage.setItem('techstore-cart', JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    localStorage.setItem('techstore-favorites', JSON.stringify(favorites))
  }, [favorites])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('techstore-theme', JSON.stringify(theme))
  }, [theme])

  useEffect(() => {
    if (!toast) return undefined
    const timeout = window.setTimeout(() => setToast(''), 2800)
    return () => window.clearTimeout(timeout)
  }, [toast])

  const addToCart = (product) => {
    setCart((currentCart) => {
      const existing = currentCart.find((item) => item.id === product.id)
      if (existing) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: Math.min(item.quantity + 1, product.stock) }
            : item,
        )
      }
      return [...currentCart, { ...product, quantity: 1 }]
    })
    setToast(`${product.name} fue agregado al carrito`)
  }

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      setCart((currentCart) => currentCart.filter((item) => item.id !== productId))
      return
    }
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === productId ? { ...item, quantity: Math.min(quantity, item.stock) } : item,
      ),
    )
  }

  const removeFromCart = (productId) => {
    setCart((currentCart) => currentCart.filter((item) => item.id !== productId))
  }

  const toggleFavorite = (productId) => {
    setFavorites((currentFavorites) =>
      currentFavorites.includes(productId)
        ? currentFavorites.filter((id) => id !== productId)
        : [...currentFavorites, productId],
    )
  }

  const clearFilters = () => {
    setQuery('')
    setCategory('Todos')
    setSortBy('featured')
  }

  return (
    <div className="site-shell">
      <Header
        query={query}
        onQueryChange={setQuery}
        cart={cart}
        cartCount={cartCount}
        isCartOpen={isCartOpen}
        onToggleCart={() => setIsCartOpen((open) => !open)}
        onUpdateQuantity={updateQuantity}
        onRemoveFromCart={removeFromCart}
        theme={theme}
        onToggleTheme={() => setTheme((current) => (current === 'light' ? 'dark' : 'light'))}
        onOpenLogin={() => setIsLoginOpen(true)}
      />
      <Navbar isOpen={isMenuOpen} onToggle={() => setIsMenuOpen((open) => !open)} />

      <main>
        <Banner />

        <section id="productos" className="catalog-section">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow"><Sparkles size={15} /> Selección TechStore</span>
                <h2 id="ofertas">Productos destacados</h2>
                <p>Equipos escogidos por rendimiento, valoración y precio.</p>
              </div>
              <span className="results-count">{filteredProducts.length} productos</span>
            </div>

            <div className="catalog-tools">
              <div className="category-pills" aria-label="Filtrar por categoría">
                {categories.map((item) => (
                  <button
                    type="button"
                    key={item}
                    className={category === item ? 'active' : ''}
                    onClick={() => setCategory(item)}
                    aria-pressed={category === item}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <div className="catalog-selects">
                <span className="favorite-summary"><Heart size={16} /> {favorites.length}</span>
                <label className="sort-control">
                  <SlidersHorizontal size={16} />
                  <select value={sortBy} onChange={(event) => setSortBy(event.target.value)} aria-label="Ordenar productos">
                    <option value="featured">Destacados</option>
                    <option value="price-asc">Menor precio</option>
                    <option value="price-desc">Mayor precio</option>
                    <option value="rating">Mejor valoración</option>
                  </select>
                  <ChevronDown size={15} />
                </label>
              </div>
            </div>

            <div className="catalog-layout">
              <ProductList
                products={filteredProducts}
                onAddToCart={addToCart}
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
                onClearFilters={clearFilters}
              />
              <Sidebar />
            </div>
          </div>
        </section>
      </main>

      <BenefitBar />
      <Footer />
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <Toast message={toast} onClose={() => setToast('')} />
    </div>
  )
}

export default App
