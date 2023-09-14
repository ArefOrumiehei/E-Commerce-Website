//Icons
import { IconChevronRight } from '@tabler/icons-react';

//Styles
import '../scss/Home.scss';

//Components
import Slider from '../components/Slider';
import AmazingSale from '../components/AmazingSale';
import Categories from '../components/Categories';
import BestSelling from '../components/BestSelling';
import CountDownTimer from '../components/CountDownTimer';
import ExploreProducts from '../components/ExploreProducts';
import NewArrival from '../components/NewArrival';

const Home = () => {
    return (
        <div className='home'>
            <div className="container">
                <div className="menuAndSlider">
                    <div className="categoriesMenu">
                        <ul>
                            <li>
                                <span>Mens&apos;s Fashion</span>
                                <IconChevronRight/>
                            </li>
                            <li>
                                <span>Womens&apos;s Fashion</span>
                                <IconChevronRight/>
                            </li>
                            <li>
                                <span>Electronics</span>
                            </li>
                            <li>
                                <span>Home & Lifestyle</span>
                            </li>
                            <li>
                                <span>Books & Stationery</span>
                            </li>
                            <li>
                                <span>Medicine</span>
                            </li>
                            <li>
                                <span>Sports & Outdoor</span>
                            </li>
                            <li>
                                <span>Baby&apos;s & Toys</span>
                            </li>
                            <li>
                                <span>Health & Beauty</span>
                            </li>
                        </ul>
                    </div>
                    <Slider/>
                </div>
                <AmazingSale/>
                <hr/>
                <Categories/>
                <hr/>
                <BestSelling/>
                <div className="advBanner">
                    <div className="left">
                        <span className="subTitle">Categories</span>
                        <span className="title">Enhance Your Music Experience</span>
                        <CountDownTimer className='timer' initialTime={2322545}/>
                        <button>Buy Now!</button>
                    </div>
                    <div className="right">
                        <div className="imgContainer">
                            <img src="https://s3-alpha-sig.figma.com/img/3cc9/43ca/7e210f637fc0504b7d93cd207df744c2?Expires=1695600000&Signature=Ribx-mWCDEHQ3l3TJ80IKU2vQnXwGPEMRBf1ApgbMj5pKXDXfQhwwDMCVcdrybEOo5kXvuSAYbbrTyPgneRJtpeYRVfKx4UwgUmqrlOmS8xUXiEtZvV2ZAGIeLrJzLIJEhVFr9GgNmixZ4HGg63YQyzHpwziuqJ7xOsJhljSUduSeRprSj0Q3srZVWYoNAQbgBYvnBtwkFYK1rc7kL7Y5yMa~NJXLJsW7uOUKqDHHlF9GW~E0309CK6P6lbBD-rpIUZl40Qnkk2q0~X2l9Xy-y16bhyavLg4bCJGnisBxsxik-aiCApFWTbku4P1GkXdpeOwED7NaPcFRfO75bnjRA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                        </div>
                    </div>
                </div>
                <ExploreProducts/>
                <hr/>
                <NewArrival/>
            </div>
        </div>
    );
};

export default Home;