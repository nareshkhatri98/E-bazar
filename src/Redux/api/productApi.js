
// 'https://dummyjson.com/'
// 
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://tp.api.internal.webpoint.io/api/' }),

  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `products/`,
    }),
  }),
})


export const { useGetProductsQuery} = productApi  