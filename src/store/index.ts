import { configureStore } from "@reduxjs/toolkit";
import { ProductService } from "../store/slices/productSlice"; // adjust path relative to file



export const store = configureStore({
    reducer: {
        [ProductService.reducerPath]: ProductService.reducer,
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(ProductService.middleware),
})


export type RootState = ReturnType<typeof store.getState >
export type AppDispatch = typeof store.dispatch