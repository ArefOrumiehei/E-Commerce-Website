//Icons
import { IconBooks, IconCamera, IconDeviceDesktop, IconDeviceGamepad, IconDeviceMobile, IconDeviceWatch, IconHanger, IconHeadphones, IconHome, IconKeyboard } from '@tabler/icons-react';

//Styles
import '../scss/Categories.scss';

const Categories = () => {
    return (
        <div className='categories'>
            <div className="header">
                <div className="titleSection">
                    <div className="title">
                        <div className="subTitle">
                            <div className="pointer" />
                            <span>Categories</span>
                        </div>
                        <div className="mainTitle">
                            <h4>Browse By Category</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main">
                <div className="mainContent">
                    <div className="item">
                        <IconDeviceMobile size={60} stroke={1.25} />
                        <span>Phones</span>
                    </div>
                    <div className="item">
                        <IconDeviceDesktop size={60} stroke={1.25} />
                        <span>Computers</span>
                    </div>
                    <div className="item">
                        <IconDeviceWatch size={60} stroke={1.25} />
                        <span>Smart Watch</span>
                    </div>
                    <div className="item">
                        <IconKeyboard size={60} stroke={1.25} />
                        <span>PC Accessories</span>
                    </div>
                    <div className="item">
                        <IconCamera size={60} stroke={1.25} />
                        <span>Camera</span>
                    </div>
                    <div className="item">
                        <IconHeadphones size={60} stroke={1.25} />
                        <span>Headphones</span>
                    </div>
                    <div className="item">
                        <IconHanger size={60} stroke={1.25} />
                        <span>Fashion</span>
                    </div>
                    <div className="item">
                        <IconBooks size={60} stroke={1.25} />
                        <span>Books</span>
                    </div>
                    <div className="item">
                        <IconHome size={60} stroke={1.25} />
                        <span>Home Design</span>
                    </div>
                    <div className="item">
                        <IconDeviceGamepad size={60} stroke={1.25} />
                        <span>Gaming</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;