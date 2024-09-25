import { createBrowserRouter } from "react-router-dom";
import About from "../components/About";
import BookDetails from "../components/book/BookDetails";
import CommonLayout from "../components/common/CommonLayout";
import HomePage from "../components/pages/HomePage";
import { ROUTES } from "../routes/index";
import Blog from "../components/Blog";

const router = createBrowserRouter([
  {
    path: `${ROUTES.HOME}`,
    element: <CommonLayout />,
    children: [
      {
        path: `${ROUTES.HOME}`,
        element: <HomePage />,
      },
      {
        path: `${ROUTES.BOOKS}`,
        element: <HomePage />,
      },
      {
        path: `${ROUTES.CONTACT}`,
        element: <About />,
      },
      {
        path: `${ROUTES.BLOG}`,
        element: <Blog />,
      },

      {
        path: `${ROUTES.SINGLE_BOOK.STATIC}`,
        element: <BookDetails />,
      },
    ],
  },
]);

export default router;
