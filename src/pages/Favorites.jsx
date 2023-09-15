import { useContext } from 'react';

//Styles
import '../scss/Favorites.scss';

//Contexts
import { ProductsContext } from '../contexts/ProductsContextProvider';
import { FavoritesContext } from '../contexts/FavoritesContextProvider';

//Components
import ProductCard from '../components/ProductCard'

const Favorites = () => {

    const products = useContext(ProductsContext)
    const {favoritesState} = useContext(FavoritesContext)


    return (
        <div className='favorites'>
            <div className="container">
                <div className="favoritesSection">
                    <div className="header">
                        <span className="title">Favorites ({favoritesState.totalFavorites})</span>
                        <button className='moveAllBtn'>Move All To Cart</button>
                    </div>
                    <div className="main">
                        {favoritesState.favoriteProducts.length > 0 ? (
                            favoritesState.favoriteProducts.map(product => (
                                <ProductCard product={product} key={product.id} />
                            ))
                        ) : (
                            <div className="emptyFavorites">
                                <h1 className='emptyText'>Your Favorites is Empty!</h1>
                                <span className="goToShopBtn">Go to Shop</span>
                            </div>
                        )}
                    </div>
                </div>
                <hr/>
                <div className="suggestionSection">
                    <div className="header">
                        <div className="titleSection">
                            <div className="pointer"/>
                            <span className="title">Suggestion For You</span>
                        </div>
                        <button className='seeAllBtn'>See All</button>
                    </div>
                    <div className="main">
                        {products.slice(4 , 8).map(product => <ProductCard product={product} key={product.id} />)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Favorites;