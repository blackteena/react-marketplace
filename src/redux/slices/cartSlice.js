import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    totalPrice: 0,
    products: [],
    totalCount:0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct(state, action) {
            const findProduct = state.products.find(obj => obj.id === action.payload.id)

            if (findProduct) {
                findProduct.count++
            }

            else {
                state.products.push({
                    ...action.payload,
                    count: 1,
                }) 
            } 
            state.totalPrice = state.products.reduce((sum, obj) => {
                return obj.price*obj.count + sum
            }, 0)
            state.totalCount = state.products.reduce((sum, obj) => {
                return obj.count + sum
            }, 0)
        }, 
        removeProduct(state, action) {
            state.products = state.products.filter(obj => obj.id !== action.payload.id)
            state.totalPrice-=action.payload.count*action.payload.price
            state.totalCount-=action.payload.count
        },
        clearProducts(state) {
            state.products = []
            state.totalPrice=0
            state.totalCount=0
        },
        decrementProduct(state,action){
            const findProduct = state.products.find(obj => obj.id === action.payload.id)
            const price=action.payload.price

            if (findProduct.count===1) {
                state.products = state.products.filter(obj => obj.id !== action.payload.id)
            }

            findProduct.count--
            state.totalCount-- 
            state.totalPrice-=price
        }
    },
})

export const { addProduct, removeProduct, clearProducts,decrementProduct } = cartSlice.actions

export default cartSlice.reducer

