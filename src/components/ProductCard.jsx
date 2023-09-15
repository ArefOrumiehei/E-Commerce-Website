import { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types'

//Styles
import '../scss/ProductCard.scss';

//Components
import ProductRating from './ProductRating';

//Icons
import { IconEye, IconHeart, IconHeartFilled, IconTrash } from '@tabler/icons-react';

//Contexts
import { FavoritesContext } from '../contexts/FavoritesContextProvider';

const ProductCard = ({product}) => {

    const {favoritesState , favoritesDispatch} = useContext(FavoritesContext)

    console.log(favoritesState);

    const [isLiked , setIsLiked] = useState(false)
    const [randomDiscount, setRandomDiscount] = useState(Math.floor(Math.random() * (60 - 5 + 1) + 5));
    const [showOnHover, setShowOnHover] = useState(false);

    useEffect(() => {
        setRandomDiscount(Math.floor(Math.random() * (60 - 5 + 1) + 5));
        setShowOnHover(false);
    }, [product]);


    const shorten = (title) => {
        let splitedTitle = title.split(' ')
        let newTitle = `${splitedTitle[0]} ${splitedTitle[1]} ${splitedTitle[2]}`
    
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


    return (
        <div className={`productCard ${showOnHover ? 'showOnHover' : ''}`} onMouseEnter={() => setShowOnHover(true)} onMouseLeave={() => setShowOnHover(false)}>
            <div className="imgContent">
                <img src={product.image} alt="" />
                <div className="icons">
                    {isLiked ? 
                        <IconHeartFilled onClick={filledHeartHandler} className='filledHeart' /> 
                        : 
                        <IconHeart onClick={heartHandler} className='heart'/> 
                    }
                    <IconEye className='iconEye'/>        
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
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    product : PropTypes.any,
}

export default ProductCard;