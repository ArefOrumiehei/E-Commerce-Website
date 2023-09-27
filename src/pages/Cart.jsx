import { useContext } from 'react';
import { Link } from 'react-router-dom';

//Styles
import '../scss/Cart.scss';

//Contexts
import { CartContext } from '../contexts/CartContextProvider';

const Cart = () => {

    const { cartState } = useContext(CartContext)

    console.log(cartState);

    return (
        <div className='cart'>
            <div className="container">
                <div className="breadcrumb">
                    <Link to='/' className='link'>Home</Link> / <span>Cart</span>
                </div>
                <div className="main">
                    <div className="cartTabel">
                        <table>
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='productCol'>
                                        <img className='productImg' src={cartState.selectedProducts[0].image} alt="" />
                                        <span>{cartState.selectedProducts[0].title}</span>
                                    </td>
                                    <td>${cartState.selectedProducts[0].price}</td>
                                    <td><input type="number" value='' name="" id="quantity" /></td>
                                    <td>$20.00</td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src="" alt="" />
                                        <span>Product 2</span>
                                    </td>
                                    <td>$15.00</td>
                                    <td><input type="number" value='' name="" id="quantity" /></td>
                                    <td>$45.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="cartBtns">
                        <button>Return To Shop</button>
                        <button>Update Cart</button>
                    </div>
                    <div className="cartPay">
                        <div className="coupon">
                            <input type="text" name="" id="" placeholder='Coupon Code' />
                            <button>Apply Coupon</button>
                        </div>
                        <div className="totalDetails">
                            <h5 className="title">Cart Total</h5>
                            <div className="details">
                                <div className="subtotal">
                                    <span>Subtotal :</span>
                                    <span>222$</span>
                                </div>
                                <hr/>
                                <div className="shipping">
                                    <span>Shipping :</span>
                                    <span>Free</span>
                                </div>
                                <hr/>
                                <div className="total">
                                    <span>Total :</span>
                                    <span>222$</span>
                                </div>
                            </div>
                            <button>Procees to checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;