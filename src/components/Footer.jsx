//Styles
import '../scss/Footer.scss';

//Images
import QRCode from '../assets/images/qrCode.png'
import GooglePlay from '../assets/images/googlePlay.png'
import AppStore from '../assets/images/downloadfromAppStore.png'

//Icons
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandTwitter , IconCopyright, IconSend} from '@tabler/icons-react';


const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="mainContent">
                    <div className="exclusive">
                        <h3>Exclusive</h3>
                        <span>Subscribe</span>
                        <span>Get 10% off your first order</span>
                        <div className="emailInput">
                            <input type="email" name="email" id="email" placeholder='Enter your email' />
                            <IconSend/>
                        </div>
                    </div>
                    <div className="support">
                        <h3>Support</h3>
                        <span>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</span>
                        <span>exclusive@gmail.com</span>
                        <span>+88015-88888-9999</span>
                    </div>
                    <div className="account">
                        <h3>Account</h3>
                        <span>My Account</span>
                        <span>Sign Up / Login</span>
                        <span>Cart</span>
                        <span>Wishlist</span>
                        <span>Shop</span>
                    </div>
                    <div className="quickLink">
                        <h3>Quick Link</h3>
                        <span>Privacy Policy</span>
                        <span>Terms Of Use</span>
                        <span>FAQ</span>
                        <span>Contact</span>
                    </div>
                    <div className="downloadApp">
                        <h3>Download App</h3>
                        <span>Save $3 with App New User Only</span>
                        <div className="ways">
                            <img className='qrCode' src={QRCode} alt="" />
                            <div className="appDownload">
                                <img className='googlePlay' src={GooglePlay} alt="" />
                                <img className='appStore' src={AppStore} alt="" />
                            </div>
                        </div>
                        <div className="socialMedia">
                            <IconBrandFacebook/>
                            <IconBrandTwitter/>
                            <IconBrandInstagram/>
                            <IconBrandLinkedin/>
                        </div>
                    </div>
                </div>
                <div className="footerContent">
                    <IconCopyright/>
                    <span>Copyright Aref 2023. All right reserved</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;