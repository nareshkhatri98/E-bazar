
// 'https://dummyjson.com/'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://10.10.1.26:8000/api/' }),

  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `products/`,
    }),
  }),
})


export const { useGetProductsQuery} = productApi  