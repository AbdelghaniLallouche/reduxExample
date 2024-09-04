import { configureStore } from '@reduxjs/toolkit';
import countSlice from './countSlice';

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const store = configureStore({
    reducer: {
        count : countSlice,
    }
});

export default store;