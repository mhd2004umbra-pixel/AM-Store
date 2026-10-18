import Header from './header'
import Footer from './footer'
import './App.css'
import ProductCard from './cards'
import { products } from './products'
import Buttons from './buttons'

export default function App() {
  const handleSelect = (product) => {
    console.log('Selected product:', product)
  }

  return (
    <div className="app-container">
      <Header />
      <Buttons/>
      <div className="products-grid">
        {products
          .map((item) => (
            <ProductCard
              key={item.id}
              product={item}
              onSelect={handleSelect}
            />
          ))}
      </div>
      <Footer />
    </div>
  )
}