import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import PageNotFound from "./page/PageNotFound";
import App from "./App";
import PreTest from "./page/PreTest";
import PostTest from "./page/PostTest";
import Module from "./page/Module";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
  },
  {
    path: "/pre-test",
    element: <PreTest />,
  },
  {
    path: "/modules/:id",
    element: <Module />,
  },
  {
    path: "/post-test",
    element: <PostTest />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
