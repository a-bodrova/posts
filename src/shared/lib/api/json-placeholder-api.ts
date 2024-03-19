import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiDomain, apiPath } from "app/consts";
import { Post } from "app/types";

interface DefaultArgs<T> {
  params?: Record<keyof Partial<T>, string | number | undefined>;
}

export const jsonPlaceholderApi = createApi({
  reducerPath: "jsonPlaceholderApi",
  baseQuery: fetchBaseQuery({ baseUrl: apiDomain }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], DefaultArgs<Post>>({
      query: ({ params }) => ({
        url: apiPath.posts,
        params,
      }),
    }),
  }),
});

export const { useGetPostsQuery } = jsonPlaceholderApi;
