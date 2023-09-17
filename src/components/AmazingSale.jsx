import { useContext } from "react";

//Icons
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

//Styles
import '../scss/AmazingSale.scss'

//Components
import CountDownTimer from "./CountDownTimer";
import ProductCard from "./ProductCard";

//Contexts
import { ProductsContext } from "../contexts/ProductsContextProvider";

const AmazingSale = () => {

    const products = useContext(ProductsContext)


    const handleScrollLeft = () => {
        document.querySelector('.main').scrollLeft -= 230
    };
    
    const handleScrollRight = () => {
        document.querySelector('.main').scrollLeft += 230
    };
    

    return (
        <div className="amazingSale">
            <div className="header">
                <div className="titleSection">
                    <div className="title">
                        <div className="subTitle">
                            <div className="pointer" />
                            <span>Today&apos;s</span>
                        </div>
                        <div className="mainTitle">
                            <h4>Amazing Sale</h4>
                        </div>
                    </div>
                    <div className="timer">
                        <CountDownTimer initialTime={335572}/>
                    </div>
                </div>
                <div className="arrows">
                    <IconArrowLeft onClick={handleScrollLeft}/>
                    <IconArrowRight onClick={handleScrollRight}/>
                </div>
            </div>
            <div className="main">
                {products.slice(0 , 10).map(product => <ProductCard key={product.id} product={product} />)}
            </div>
            <div className="footer">
                <button>View All Products</button>
            </div>
        </div>
    );
};

export default AmazingSale;