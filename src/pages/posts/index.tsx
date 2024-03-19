import { useGetPostsQuery } from "shared/lib/api/json-placeholder-api";

export const Posts = () => {
  const { data } = useGetPostsQuery({});

  console.log({ data });

  return <>Posts</>;
};
