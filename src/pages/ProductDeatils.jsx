import { useContext , useState } from 'react';
import { useParams } from 'react-router-dom';


//Styles
import '../scss/ProductDeatils.scss';

//Icons
import { IconHeart, IconHeartFilled, IconMinus, IconPlus, IconRefresh, IconTruckDelivery } from '@tabler/icons-react';

//Contexts
import { ProductsContext } from '../contexts/ProductsContextProvider';
import { FavoritesContext } from '../contexts/FavoritesContextProvider';

//Components
import ProductRating from '../components/ProductRating';

const ProductDeatils = () => {

    const {favoritesDispatch} = useContext(FavoritesContext)


    const [activeColor, setActiveColor] = useState('color1');
    const [activeSize, setActiveSize] = useState('S');
    const [isLiked , setIsLiked] = useState(false)


    const products = useContext(ProductsContext)
    const parameter = useParams()
    const id = parameter.id
    const product = products[id - 1]



    const filledHeartHandler = () => {
        setIsLiked(!isLiked)
        favoritesDispatch({type : 'DELETE' , payload : product})
    }

    const heartHandler = () => {
        setIsLiked(!isLiked)
        favoritesDispatch({type : 'ADD' , payload : product})
    }


    return (
        <div className='productDetails'>
            <div className="container">
                <div className="breadcrumb"></div>
                {product ? (
                <div className="product">
                    <div className="imagesContainer">
                        <div className="miniImages">
                            <img src={product.image} alt="" />
                            <img src={product.image} alt="" />
                            <img src={product.image} alt="" />
                            <img src={product.image} alt="" />
                        </div>
                        <div className="mainImage">
                            <img src={product.image} alt="" />
                        </div>
                    </div>
                    <div className="details">
                        <div className="descSection">
                            <h3 className="title">{product.title}</h3>
                            <div className="productState">
                                <div className="rate"><ProductRating rating={product.rating.rate} numReviews={product.rating.count}/></div>
                                <div className="stock">In Stock</div>
                            </div>
                            <span className="price">${product.price}</span>
                            <p className="desc">{product.description}</p>
                        </div>
                        <hr/>
                        <div className="options">
                            <div className="colors">
                                <span>Colors :</span>
                                <div className={`color1 ${activeColor === 'color1' ? 'active' : ''}`} onClick={() => setActiveColor('color1')}/>
                                <div className={`color2 ${activeColor === 'color2' ? 'active' : ''}`} onClick={() => setActiveColor('color2')}/>
                            </div>
                            <div className="sizes">
                                <span>Size :</span>
                                <span className={`sizeOption ${activeSize === 'XS' ? 'active' : ''}`} onClick={() => setActiveSize('XS')}>XS</span>
                                <span className={`sizeOption ${activeSize === 'S' ? 'active' : ''}`} onClick={() => setActiveSize('S')}>S</span>
                                <span className={`sizeOption ${activeSize === 'M' ? 'active' : ''}`} onClick={() => setActiveSize('M')}>M</span>
                                <span className={`sizeOption ${activeSize === 'L' ? 'active' : ''}`} onClick={() => setActiveSize('L')}>L</span>
                                <span className={`sizeOption ${activeSize === 'XL' ? 'active' : ''}`} onClick={() => setActiveSize('XL')}>XL</span>
                            </div>
                            <div className="addSection">
                                <div className="count">
                                    <button className="minus"><IconMinus/></button>
                                    <div className="counter">1</div>
                                    <button className="plus"><IconPlus/></button>
                                </div>
                                <div className="addToCart">
                                    <button>Buy Now</button>
                                </div>
                                <div className="addToFavorites">
                                    {isLiked ? 
                                        <button onClick={filledHeartHandler} className='filledHeart'><IconHeartFilled/></button>
                                        : 
                                        <button onClick={heartHandler} className='heart'><IconHeart/></button>
                                    }
                                </div>
                            </div>
                            <div className="features">
                                <div className="item">
                                    <IconTruckDelivery stroke={1.25}/>
                                    <div className="text">
                                        <span className="title">Free Delivery</span>
                                        <span className="desc">Enter your postal code for Delivery Availability</span>
                                    </div>
                                </div>
                                <div className="item">
                                    <IconRefresh stroke={1.25}/>
                                    <div className="text">
                                        <span className="title">Return Delivery</span>
                                        <span className="desc">Free 30 Days Delivery Returns. Details</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>) : <h1>Loading ...</h1>}
                <div className="relatedProducts">
                    <div className="header">
                        <div className="titleSection">
                            <div className="title">
                                <div className="subTitle">
                                    <div className="pointer" />
                                    <span>Related Products</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main">
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDeatils;