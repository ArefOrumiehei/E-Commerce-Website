//Icons
import { IconChevronRight } from '@tabler/icons-react';

//Styles
import '../scss/Home.scss';
import Slider from '../components/Slider';

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
            </div>
        </div>
    );
};

export default Home;