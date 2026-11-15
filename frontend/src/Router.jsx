
import { createBrowserRouter, Navigate } from "react-router-dom";

import LoginPage from "./pages/authentication/Login.page";
import SignupPage from "./pages/authentication/Signup.page";

import BlogsPage from "./pages/blogs/Blogs.page";
import CreateBlogPage from "./pages/blogs/CreateBlog.page";
import BlogPage from "./pages/blogs/Blog.page";
import { PublicLayout } from "./layouts/PublicLayout";
import { PrivateLayout } from "./layouts/PrivateLayout";

const Router = createBrowserRouter([
  {
    element: <PublicLayout/>,
    children: [
      {
        path: "/blogs",
        element: <BlogsPage />,
      },
      {
        path: "/blogs/:slug",
        element: <BlogPage />,
      },
    ],
  },

  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/signup",
    element: <SignupPage/>,
  },

  {
    element: <PrivateLayout/>,
    children: [
      {
        path: "/write",
        element: <CreateBlogPage />,
      },
    ],
  },

  {
    path: "*",
    element: <Navigate to="/blogs" replace />,
  },
]
  );

export default Router;
