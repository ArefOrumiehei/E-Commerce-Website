import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

//Main Component
import App from './App.jsx'

//Styles
import './index.css'

//Contexts
import ProductsContextProvider from './contexts/ProductsContextProvider.jsx'
import FavoritesContextProvider from './contexts/FavoritesContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FavoritesContextProvider>
      <ProductsContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ProductsContextProvider>
    </FavoritesContextProvider>
  </React.StrictMode>,
)
