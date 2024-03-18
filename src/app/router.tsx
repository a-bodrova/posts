import { Route, Routes } from "react-router-dom";
import { Paths } from "./paths";
import { Posts } from "pages/posts";
import { PostDetail } from "pages/post-detail";
import { NotFound } from "pages/not-found";

export const Router = () => {
  return (
    <Routes>
      <Route path={Paths.Posts} element={<Posts />} key={Paths.Posts} />
      <Route path={Paths.PostDetail} element={<PostDetail />} key={Paths.PostDetail} />
      <Route path={Paths.NotFound} element={<NotFound />} key={Paths.NotFound} />
    </Routes>
  );
};
