import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

//Main Component
import App from './App.jsx'

//Styles
import './index.css'

//Contexts
import ProductsContextProvider from './contexts/ProductsContextProvider.jsx'
import FavoritesContextProvider from './contexts/FavoritesContextProvider.jsx'
import CartContextProvider from './contexts/CartContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <CartContextProvider>
      <FavoritesContextProvider>
        <ProductsContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ProductsContextProvider>
      </FavoritesContextProvider>
    </CartContextProvider>
  </>,
)
