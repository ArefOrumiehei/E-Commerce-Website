//Styles
import '../scss/BestSelling.scss';

const BestSelling = () => {
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
            <div className="main"></div>
        </div>
    );
};

export default BestSelling;