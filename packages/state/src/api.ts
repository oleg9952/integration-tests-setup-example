import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LoginRequest, LoginResponse, User } from "./types";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery(),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => "https://jsonplaceholder.typicode.com/users",
    }),
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: "https://dummyjson.com/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useGetUsersQuery, useLoginMutation } = api;
