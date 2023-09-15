import { useContext } from 'react';

//Styles
import '../scss/WishList.scss';

//Contexts
import { ProductsContext } from '../contexts/ProductsContextProvider';

//Components
import ProductCard from '../components/ProductCard'

const WishList = () => {

    const products = useContext(ProductsContext)

    return (
        <div className='wishList'>
            <div className="container">
                <div className="wishListSection">
                    <div className="header">
                        <span className="title">Wishlist (4)</span>
                        <button className='moveAllBtn'>Move All To Cart</button>
                    </div>
                    <div className="main">
                        {products.slice(10 , 15).map(product => <ProductCard product={product} key={product.id} />)}
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

export default WishList;