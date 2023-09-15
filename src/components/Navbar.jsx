import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

//Icons
import { IconBasket, IconChevronDown, IconChevronUp, IconHeart, IconLogin, IconSearch, IconShoppingCart, IconStar, IconUser } from '@tabler/icons-react';

//Styles
import '../scss/Navbar.scss';

//Contexts
import { FavoritesContext } from '../contexts/FavoritesContextProvider';

const Navbar = () => {

    const {favoritesState} = useContext(FavoritesContext)


    const [isSticky, setIsSticky] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('English');
    const [userDropDown , setUserDropDown] = useState(false)

    const languageHandler = (language) => {
        setSelectedLanguage(language);
        setIsDropdownOpen(false);
    };

    useEffect(() => {
        
        const handleScroll = () => {
            const firstNavbarHeight = document.querySelector('.firstNav').offsetHeight;

            if (window.scrollY > firstNavbarHeight) {
                setIsSticky(true);
                const secondNavbarHeight = document.querySelector('.secondNav').offsetHeight;
                document.body.style.paddingTop = secondNavbarHeight + 'px';
            } else {
                setIsSticky(false);
                document.body.style.paddingTop = '0';
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='navbar'>
            <div className='firstNav'>
                <div className="left"></div>
                <div className="center">
                    <span>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
                    <span className='shopNow'>ShopNow</span>
                </div>
                <div className="right">
                    <div className="language" onClick={() => setIsDropdownOpen(!isDropdownOpen)} >
                        <span>{selectedLanguage}</span>
                        {isDropdownOpen ? <IconChevronUp/> : <IconChevronDown/>}
                        {isDropdownOpen && 
                        <div className="languageDropdown">
                            <ul>
                                <li onClick={() => languageHandler('English')}>English</li>
                                <li onClick={() => languageHandler('فارسی')}>فارسی</li>
                                <li onClick={() => languageHandler('العربية')}>العربية</li>
                            </ul>
                        </div>}
                    </div>
                </div>
            </div>
            <div className={`secondNav ${isSticky ? 'sticky' : ''}`}>
                <div className="left">
                    <Link to='/' className='link'>
                        <div className="logo">
                            <h1>E-Commerce</h1>
                        </div>
                    </Link>
                    <div className="menu">
                        <ul className="menuList">
                            <Link to='/' className='link'>
                                <li className="listItem">Home</li>
                            </Link>
                            <li className="listItem">Products</li>
                            <li className="listItem">Contact</li>
                            <li className="listItem">About</li>
                        </ul>
                    </div>
                </div>
                <div className="right">
                    <div className="searchInput">
                        <input type="text" name="text" id="text" placeholder='What are you looking for?' />
                        <IconSearch/>
                    </div>   
                    
                    <Link to='/favorites' className='link'>
                        <div className="wishListIcon">
                            <IconHeart size={25}/>
                            {favoritesState.totalFavorites !== 0 && <span>{favoritesState.totalFavorites}</span>}
                        </div>
                    </Link>

                    <div className="cartIcon">
                        <IconShoppingCart size={25}/>
                        <span>5</span>
                    </div>

                    <div className="userIcon" onClick={() => setUserDropDown(!userDropDown)}>
                        <IconUser size={25}/>
                        {userDropDown &&
                        <div className="userDropDown">
                            <ul>
                                <li className='dropDownItem'>
                                    <IconUser/>
                                    <span>Manage Account</span>
                                </li>
                                <li className='dropDownItem'>
                                    <IconBasket/>
                                    <span>My Order</span>
                                </li>
                                <li className='dropDownItem'>
                                    <IconStar/>
                                    <span>My Reviews</span>
                                </li>
                                <hr/>
                                <li className='dropDownItem'>
                                    <IconLogin/>
                                    <span>Log Out</span>
                                </li>
                            </ul>
                        </div>
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;