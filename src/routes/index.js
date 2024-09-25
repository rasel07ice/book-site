export const ROUTES = {
    HOME: "/",
    BOOKS: "/books",
    CONTACT:"/contact",
    BLOG:"/blog",
    SINGLE_BOOK: {
      STATIC: "/book/:bookId",
      DYNAMIC: (bookId) => `/book/${bookId}`,
    },
  };