import {createContext , useReducer} from 'react';
import PropTypes from 'prop-types'

const initialState = {
    selectedProducts : [],
    productsCounter : 0,
    total : 0,
    checkout : false,
}

const sumProducts = item => {
    const productsCounter = item.reduce((total , product) => total + product.quantity , 0)
    const totalPrice = item.reduce((total , product) => total + product.price * product.quantity , 0).toFixed(2)
    return { productsCounter , totalPrice}
}

const cartReducer = (state , action) => {
    switch (action.type) {
        case 'ADD':
            if (!state.selectedProducts.find(item => item.id === action.payload.id)) {
                state.selectedProducts.push({
                    ...action.payload,
                    quantity : 1,
                    ...sumProducts(state.selectedProducts),
                })
            }
            return {
                ...state ,
                selectedProducts : [...state.selectedProducts],
                ...sumProducts(state.selectedProducts),
            }
            
        case 'DELETE':
            {const newCartProducts = state.selectedProducts.filter(item => item.id !== action.payload.id)
                return {
                    ...state ,
                    selectedProducts : [...newCartProducts],
                    ...sumProducts(newCartProducts),
                }}
        
        case 'INCREASE':
            {const indexI = state.selectedProducts.findIndex(item => item.id === action.payload.id)
                state.selectedProducts[indexI].quantity++
                return {
                    ...state,
                    ...sumProducts(state.selectedProducts),
                }
            }

        case 'DECREASE':
            {const indexD = state.selectedProducts.findIndex(item => item.id === action.payload.id)
                state.selectedProducts[indexD].quantity--
                return {
                    ...state,
                    ...sumProducts(state.selectedProducts),
                }
            }

        case 'CHECKOUT':
            return {
                selectedProducts : [],
                productsCounter : 0,
                total : 0,
                checkout : true,
            }

        case 'CLEAR':
            return {
                selectedProducts : [],
                productsCounter : 0,
                total : 0,
                checkout : false,
            }

        default:
            return state
    }
}


export const CartContext = createContext()

const CartContextProvider = ({children}) => {

    const [cartState , cartDispatch] = useReducer(cartReducer , initialState)


    return (
        <CartContext.Provider value={{cartState , cartDispatch}}>
            {children}
        </CartContext.Provider>
    );
};

CartContextProvider.propTypes = {
    children : PropTypes.any,
}

export default CartContextProvider;