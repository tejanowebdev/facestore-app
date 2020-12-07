import {combineReducers} from '@reduxjs/toolkit'
import cartReducer from './cartSlice'

export default combineReducers({
    cart: cartReducer
})