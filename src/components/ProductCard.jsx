import { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

//Styles
import '../scss/ProductCard.scss';

//Components
import ProductRating from './ProductRating';

//Icons
import { IconEye, IconHeart, IconHeartFilled, IconMinus, IconPlus, IconTrash } from '@tabler/icons-react';

//Contexts
import { FavoritesContext } from '../contexts/FavoritesContextProvider';
import { CartContext } from '../contexts/CartContextProvider';

const ProductCard = ({product}) => {

    const {favoritesDispatch} = useContext(FavoritesContext)
    const {cartState ,cartDispatch} = useContext(CartContext)

    console.log(cartState);

    const [isLiked , setIsLiked] = useState(false)
    const [randomDiscount, setRandomDiscount] = useState(Math.floor(Math.random() * (60 - 5 + 1) + 5));

    useEffect(() => {
        setRandomDiscount(Math.floor(Math.random() * (60 - 5 + 1) + 5));
    }, [product]);


    const shorten = (title) => {
        let splitedTitle = title.split(' ')
        let newTitle = `${splitedTitle[5]} ${splitedTitle[1]} ${splitedTitle[2]}`
    
        return newTitle
    }


    const filledHeartHandler = () => {
        setIsLiked(!isLiked)
        favoritesDispatch({type : 'DELETE' , payload : product})
    }

    const heartHandler = () => {
        setIsLiked(!isLiked)
        favoritesDispatch({type : 'ADD' , payload : product})
    }

    const quantityCount = (state , id) => {
        const index = state.selectedProducts.findIndex((item) => item.id === id)
        if (index === -1) {
            return false
        } else {
            return state.selectedProducts[index].quantity
        }
    }

    const isInCart = (state , id) => {
        const result = !!state.selectedProducts.find((item) => item.id === id)
        return result
    }


    return (
        <div className='productCard'>
            <div className="imgContent">
                <img src={product.image} alt="" />
                <div className="icons">
                    {isLiked ? 
                        <IconHeartFilled onClick={filledHeartHandler} className='filledHeart' /> 
                        : 
                        <IconHeart onClick={heartHandler} className='heart'/> 
                    }
                    <Link to={`/products/${product.id}`} className='link'>
                        <IconEye className='iconEye'/>
                    </Link>   
                    <IconTrash className='iconTrash' onClick={() => favoritesDispatch({type : 'DELETE' , payload : product})}/>
                </div>
                <span className="discountPercentage">-{randomDiscount}%</span>
                <span className="newProduct">New</span>
            </div>
            <div className="titleContent">
                <h5 className="title">{shorten(product.title)}</h5>
                <div className="priceContent">
                    <span className="discountPrice">${Math.floor(product.price - (product.price * randomDiscount) / 100)}</span>
                    <span className="price">${product.price}</span>
                </div>
                <div className="rating">
                    <ProductRating rating={product.rating.rate} numReviews={product.rating.count}/>
                </div>
                <div className="addToCart">
                    <Link to={`/products/${product.id}`} className='link'>
                        <button className='detailsBtn'>Details</button>
                    </Link>
                    <div className="addToCartButtons">
                        {quantityCount(cartState , product.id) === 1 &&  
                            <button className='trashBtn' onClick={() => cartDispatch({type : 'DELETE' , payload : product})}><IconTrash/></button>
                        }

                        {quantityCount(cartState , product.id) > 1 &&  
                            <button className='minusBtn' onClick={() => cartDispatch({type : 'DECREASE' , payload : product})}><IconMinus/></button>
                        }

                        {quantityCount(cartState , product.id) > 0 && <span className='counter'>{quantityCount(cartState , product.id)}</span>}

                        {isInCart(cartState , product.id) ? 
                            <button className='plusBtn' onClick={() => cartDispatch({type : 'INCREASE' , payload : product})}><IconPlus/></button>
                            :
                            <button className='addToCartBtn' onClick={() => cartDispatch({type : 'ADD' , payload : product})}>Add To Cart</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    product : PropTypes.any,
}

export default ProductCard;