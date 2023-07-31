import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchPizzas = createAsyncThunk(
  'pizzas/fetchPizzasStatus',
  async (params) => {
    const {
        currentPage,
        categoryId,
        sort,
        searcValue,
    }=params;
    const {data} = await axios.get(`https://637fa1bd5b1cc8d6f94bc70a.mockapi.io/items?page=${currentPage}&limit=4&${categoryId > 0 ? `category=${categoryId}` : ''}&sortBy=${sort.sortProperty}&order=asc&search=${searcValue}`);
    return data;
  }
)

const initialState = {
    items:[] ,
    status: 'loading',
}

export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setItems(state,action){
            state.items=action.payload
        }
    },
    extraReducers:{
        [fetchPizzas.pending]:(state)=>{
            state.status='loading'
            state.items=[]
        },
        [fetchPizzas.fulfilled]:(state,action)=>{
            state.items=action.payload
            state.status='success'
        },
        [fetchPizzas.rejected]:(state,action)=>{
            state.status='error'
            state.items=[]
        },
    }
})

export default pizzaSlice.reducer
 
