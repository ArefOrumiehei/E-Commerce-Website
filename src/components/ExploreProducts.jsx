//Styles
import '../scss/ExploreProducts.scss';

const ExploreProducts = () => {
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
            <div className="main"></div>
            <div className="footer">
                <button>View All Products</button>
            </div>
        </div>
    );
};

export default ExploreProducts;