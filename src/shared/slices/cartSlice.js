import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',

    // saved items will be here:
    initialState: {
        isLoading:false,
        isFiltering:false,
        products:[],
        product:{
            id: "",
            name: "",
            ascii: "",
            price: 0,
            size: 0,
            date_added: "",
            description: ""
        
        },
        validationResult:{
            title:"",
            description:"",
            error: false
        }
    },

    // reducers actions
    reducers: {
        getProducts: (state, {payload}) => {
            state.products = payload
        },
        getProduct: (state, {payload}) => {
            state.product.id = payload.id
            state.product.name = payload.name
            state.product.ascii = payload.ascii
            state.product.price = payload.price
            state.product.size = payload.size
            state.product.date_added = payload.date_added
            state.product.description = payload.description
        },
        getProduct: (state, {payload}) => {
            state.product.id = payload.id
            state.product.name = payload.name
            state.product.ascii = payload.ascii
            state.product.price = payload.price
            state.product.size = payload.size
            state.product.date_added = payload.date_added
            state.product.description = payload.description
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload
        },
        setIsFiltering: (state, action) => {
            state.isFiltering = action.payload
        },
        
    }
})


const { actions, reducer } = cartSlice

export const { getProducts, getProduct, setIsLoading, setIsFiltering } = actions

export default reducer
