import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery("https://contact-app.mms-it.com/api/v1"),
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (user) => ({
        url: "/register",
        method: "POST",
        body: user
      }),
      invalidatesTags: ["Auth"]
    })
  })
});

export const { useRegisterUserMutation } = authApi;
