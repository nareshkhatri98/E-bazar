// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://tp.api.internal.webpoint.io/api/" }),

  endpoints: (builder) => ({
    // Signup endpoint
    signup: builder.mutation({
      query: (body) => {
        return {
          url: `auth/signup/`,
          method: "POST",
          body: body,
        };
      },
    }),

    // Login endpoint
    login: builder.mutation({
      query: (body) => {
        return {
          url: `auth/login/`,
          method: "POST",
          body: body, 
        };
      },
    }),
  }),
});

// Export hooks for using the mutations in components
export const { useSignupMutation, useLoginMutation } = authApi;
