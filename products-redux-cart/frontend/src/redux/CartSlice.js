import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartitems: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart")).cartitems
      : [],
    totalQuantity: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart")).totalQuantity
      : 0,
    totalprice: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart")).totalprice
      : 0,
  },
  reducers: {
    addtocart: (state, action) => {
      console.log("=========", action.payload);
      const itemindex = state.cartitems.findIndex(
        (i) => i.product.id === action.payload.id
      );
      if (itemindex === -1) {
        const item = { product: action.payload, quantity: 1 };
        state.cartitems.push(item);
        state.totalQuantity++;
        state.totalprice += item.product.price;
        localStorage.setItem(
          "cart",
          JSON.stringify({
            cartitems: state.cartitems,
            totalQuantity: state.totalQuantity,
            totalprice: state.totalprice,
          })
        );
      } else {
        state.cartitems[itemindex].quantity++;
        state.totalprice += state.cartitems[itemindex].product.price;
        localStorage.setItem(
          "cart",
          JSON.stringify({
            cartitems: state.cartitems,
            totalQuantity: state.totalQuantity,
            totalprice: state.totalprice,
          })
        );
      }
    },

    incrementquantinty: (state, action) => {
      const itemindex = state.cartitems.findIndex(
        (i) => i.product.id === action.payload.id
      );
      state.cartitems[itemindex].quantity++;
      state.totalprice += state.cartitems[itemindex].product.price;
      localStorage.setItem(
        "cart",
        JSON.stringify({
          cartitems: state.cartitems,
          totalQuantity: state.totalQuantity,
          totalprice: state.totalprice,
        })
      );
    },
    decrementquantity: (state, action) => {
      const itemindex = state.cartitems.findIndex(
        (i) => i.product.id === action.payload.id
      );
      if (state.cartitems[itemindex].quantity === 1) {
        const item = state.cartitems[itemindex];
        state.cartitems = state.cartitems.filter((i) => i !== item);
        state.totalQuantity -= item.quantity;
        state.totalprice -= item.product.price;
        localStorage.setItem(
          "cart",
          JSON.stringify({
            cartitems: state.cartitems,
            totalQuantity: state.totalQuantity,
            totalprice: state.totalprice,
          })
        );
      } else {
        state.cartitems[itemindex].quantity--;
        state.totalprice -= state.cartitems[itemindex].product.price;
        localStorage.setItem(
          "cart",
          JSON.stringify({
            cartitems: state.cartitems,
            totalQuantity: state.totalQuantity,
            totalprice: state.totalprice,
          })
        );
      }
    },
    clearcart: (state) => {
      state.cartitems = [];
      state.totalQuantity = 0;
      state.totalprice = 0;
      localStorage.removeItem("cart");
    },
  },
});

export const { addtocart , incrementquantinty , decrementquantity , clearcart } = cartSlice.actions;
export default cartSlice.reducer;
