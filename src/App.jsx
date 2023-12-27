import { useState, useEffect, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import axios from 'axios';
import ProductList from './components/ProductList'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useFilters } from './hooks/useFilters'
import { Cart } from './components/Cart'
import { CartProvider } from './context/cartContext'




function App() {

  
  const [products, setProducts] = useState([]);
  const {filters, filterProducts, setFilters} = useFilters();
  const filteredProducts = filterProducts(products);
  useEffect(() => {
      axios.get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((error) => error);
  }, [])
    
    

  return (
    <div>
        <CartProvider>
        <Header/>
        <Cart/>
        <ProductList products={filteredProducts}/>
        <Footer filters={filters}/>
        </CartProvider>
    </div>
  )
}

export default App
