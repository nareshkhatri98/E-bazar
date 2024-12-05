// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://10.10.1.26:8000/api/" }),

  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (body) => {
        return {
          url: `auth/signup/`,
          method: "POST",
          body: body,
        };
      },
    }),

  }),
});

export const { useSignupMutation} = authApi;
  