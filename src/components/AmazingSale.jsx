//Icons
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

//Styles
import '../scss/AmazingSale.scss'

//Components
import CountDownTimer from "./CountDownTimer";

const AmazingSale = () => {
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
                    <IconArrowLeft/>
                    <IconArrowRight/>
                </div>
            </div>
            <div className="main"></div>
            <div className="footer">
                <button>View All Products</button>
            </div>
        </div>
    );
};

export default AmazingSale;