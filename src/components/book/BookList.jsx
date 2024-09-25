import { useEffect, useState } from "react";
import { getAllBooks as getBooks } from "../../utils/book";
import Book from "./Book";
function BookList() {
  const [books, setBooks] = useState([]);

  const getAllBooks = async () => {
    const data = await getBooks();
    setBooks(data ? data : []);
  };
  useEffect(() => {
    getAllBooks();
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-between gap-8">
        {books?.map((book) => (
          <Book key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
}

export default BookList;
