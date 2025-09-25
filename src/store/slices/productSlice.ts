import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Product } from "../../types/product";

export const ProductService = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fakestoreapi.com',
    }),
    tagTypes: ["Product"],
    endpoints: (builder) =>({
        getProduct: builder.query<Product[], void>({query: ()=> 'products'}),
        getSpecificProduct: builder.query<Product, number>({query: (id)=> `products/${id}`}),


        login : builder.mutation<any, {email:string, password:string}>({
            query: (requests) => ({
                url : 'https://fakestoreapi.com',
                method: 'POST',
                body: requests,
            
            })
        })



    })
})





export const {
    useGetProductQuery,
    useGetSpecificProductQuery,
    useLoginMutation
  } = ProductService;