import { createSlice } from "@reduxjs/toolkit";

const savedProducts = localStorage.getItem("products");

const initialState = {
  products: savedProducts ? JSON.parse(savedProducts) : [],
  favorites: [],
};

const productSlice = createSlice({
  name: "products",

  initialState,

  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;

      localStorage.setItem(
        "products",
        JSON.stringify(state.products)
      );
    },

     addProduct: (state, action) => {
      state.products.unshift(action.payload);

      localStorage.setItem(
        "products",
        JSON.stringify(state.products)
      );
    },

    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
      localStorage.setItem(
        "products",
        JSON.stringify(state.products)
      );
    },
    
    updateProduct: (state, action) => {
      const updatedProduct = action.payload;

      const index = state.products.findIndex(
        (product) => product.id === updatedProduct.id
      );

      if (index !== -1) {
        state.products[index] = updatedProduct;
      }
      localStorage.setItem(
        "products",
        JSON.stringify(state.products)
      );
    },

    toggleFavorite: (state, action) => {
      const productId = action.payload;

      const exists = state.favorites.includes(productId);

      if (exists) {
        state.favorites = state.favorites.filter(
          (id) => id !== productId
        );
      } else {
        state.favorites.push(productId);
      }
    },
  },
});

export const { setProducts,addProduct,  updateProduct, deleteProduct, toggleFavorite } = productSlice.actions;

export const selectProducts = (state) => state.products.products;

export const selectFavorites = (state) => state.products.favorites;


export default productSlice.reducer;