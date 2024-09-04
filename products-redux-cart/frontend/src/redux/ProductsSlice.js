import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const getProducts =  createAsyncThunk("products/getProducts", async () => {
    const response = await fetch("http://localhost:5000/products");
    return response.json();
});

const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        status : "idle",
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending , (state) => {
            state.status = "loading";
        });
        builder.addCase(getProducts.fulfilled , (state, action) => {
            state.products = action.payload;
            state.status = "success";
        });
        builder.addCase(getProducts.rejected , (state) => {
            state.status = "failed";
        });   
    }
});

export default productsSlice.reducer;
