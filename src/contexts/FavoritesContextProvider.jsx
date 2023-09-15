import { createContext, useReducer } from "react";
import PropTypes from 'prop-types'


const initialState = {
    favoriteProducts : [],
    totalFavorites : 0 ,
}

const favoritesReducer = (state , action) => {
    switch (action.type) {
        case 'ADD':
            if (!state.favoriteProducts.find(item => item.id === action.payload.id)) {
                state.favoriteProducts.push({
                    ...action.payload
                })
            }
            return {
                ...state ,
                favoriteProducts : [...state.favoriteProducts] , 
                totalFavorites : state.totalFavorites++
            }
            
        case 'DELETE':
            {const newFavoritesProducts = state.favoriteProducts.filter(item => item.id !== action.payload.id)
                return {
                    ...state ,
                    favoriteProducts : [...newFavoritesProducts],
                    totalFavorites : state.totalFavorites--
                }}

        default:
            return state
    }
}

//Create Context
export const FavoritesContext = createContext()


const FavoritesContextProvider = ({children}) => {

    const [favoritesState , favoritesDispatch] = useReducer(favoritesReducer , initialState)

    return (
        <FavoritesContext.Provider value={{favoritesState , favoritesDispatch}}>
            {children}
        </FavoritesContext.Provider>
    );
};

FavoritesContextProvider.propTypes = {
    children : PropTypes.any
}

export default FavoritesContextProvider;