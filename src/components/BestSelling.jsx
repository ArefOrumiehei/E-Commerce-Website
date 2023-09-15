//Styles
import { useContext } from 'react';

//Styles
import '../scss/BestSelling.scss';

//Contexts
import { ProductsContext } from '../contexts/ProductsContextProvider';

//Components
import ProductCard from './ProductCard';

const BestSelling = () => {

    const products = useContext(ProductsContext)

    return (
        <div className='bestSelling'>
            <div className="header">
                <div className="titleSection">
                    <div className="title">
                        <div className="subTitle">
                            <div className="pointer" />
                            <span>This Month</span>
                        </div>
                        <div className="mainTitle">
                            <h4>Best Selling Products</h4>
                        </div>
                    </div>
                </div>
                <div className="viewAllBtn">
                    <button>View All</button>
                </div>
            </div>
            <div className="main">
                {products.slice(8 , 12).map(product => <ProductCard key={product.id} product={product} />)}
            </div>
        </div>
    );
};

export default BestSelling;