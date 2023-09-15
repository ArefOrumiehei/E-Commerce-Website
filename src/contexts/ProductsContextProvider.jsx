import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types'

//API
import { getProducts } from '../API/productsApi';


//Create Context
export const ProductsContext = createContext()


const ProductsContextProvider = ({children}) => {
    const [productsData , setProductsData] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            setProductsData(await getProducts())
        }

        fetchApi()
    } , [])

    
    return (
        <ProductsContext.Provider value={productsData}>
            {children}
        </ProductsContext.Provider>
    );
};

ProductsContextProvider.propTypes = {
    children : PropTypes.any,
}

export default ProductsContextProvider;