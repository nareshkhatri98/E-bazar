// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://10.10.1.26:8000/api/" }),

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
          url: `auth/login/`, // Assuming the login API is at this URL
          method: "POST",
          body: body, // Pass the email and password in the body
        };
      },
    }),
  }),
});

// Export hooks for using the mutations in components
export const { useSignupMutation, useLoginMutation } = authApi;
