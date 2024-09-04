import {configureStore} from '@reduxjs/toolkit';
import productsSlice from './ProductsSlice';
import cartSlice from './CartSlice';
import userSlice from './UserSlice';

const store = configureStore({
    reducer: {
        products : productsSlice,
        cart : cartSlice,
        user : userSlice,
    }
});

export default store;
