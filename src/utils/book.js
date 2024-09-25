export async function getAllBooks() {
  const res = await fetch("../../public/books.json", {
    method: "GET",
  });
  const result = await res.json();

  return result;
}

export async function getBookById(id) {
  const res = await fetch("../../public/books.json", {
    method: "GET",
  });
  const result = await res.json();
  const aBook = result.find((book) => {
    return book.bookId == id;
  });

  return aBook;
}
