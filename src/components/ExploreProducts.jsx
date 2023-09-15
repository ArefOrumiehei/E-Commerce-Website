import { useContext } from 'react';

//Styles
import '../scss/ExploreProducts.scss';

//Components
import ProductCard from './ProductCard';

//Contexts
import { ProductsContext } from '../contexts/ProductsContextProvider';


const ExploreProducts = () => {

    const products = useContext(ProductsContext)

    return (
        <div className='exploreProducts'>
            <div className="header">
                <div className="titleSection">
                    <div className="title">
                        <div className="subTitle">
                            <div className="pointer" />
                            <span>Our Products</span>
                        </div>
                        <div className="mainTitle">
                            <h4>Explore Our Products</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main">
                {products.slice(10 , 18).map(product => <ProductCard key={product.id} product={product} />)}
            </div>
            <div className="footer">
                <button>View All Products</button>
            </div>
        </div>
    );
};

export default ExploreProducts;