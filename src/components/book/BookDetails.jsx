import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getBookById } from "../../utils/book";
// import Button from "../utilityComponents/Button";
import Rating from "./Rating";
import Tag from "./Tag";

const BookDetails = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);
  const getBook = async () => {
    const newBook = await getBookById(bookId);
    setBook(newBook);
    console.log(newBook);
    console.log(book);
  };

  useEffect(() => {
    getBook();
  }, []);

  const notify = (bookId, bookName) =>
    toast(`you wish to read ${bookName} (id: ${bookId})`);

  const AddToCart = (bookId, bookName) =>
    toast(`Your are going to buy ${bookName} (id: ${bookId})`);

  return (
    <div className="py-8">
      <div>
        <div className="flex flex-row gap-3 items-center mt-2">
          <img
            className="size-96 rounded-lg shadow-sm"
            src={book?.image}
            alt=""
          />
          <div className="text-left">
            <h3 className="text-xl font-bold">
              <span className="font-semibold">Book Name: </span>
              {book?.bookName}
            </h3>
            <p className="text-lg">
              <span className="font-semibold">Author: </span>
              {book?.author}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Category: </span>
              {book?.category}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Total Pages: </span>
              {book?.totalPages}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Year of Publishing: </span>
              {book?.yearOfPublishing}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Publisher: </span>
              {book?.publisher}
            </p>
            <div>
              <span>Rating:</span>
              <Rating rating={book?.rating} />
            </div>
            <p className="space-x-3">
              {book?.tags?.map((tag, index) => (
                <Tag key={index} tag={tag} />
              ))}
            </p>
          </div>
        </div>

        <div className="text-left space-y-5">
          <p>
            <span>Reviews: </span>
            {book?.review}
          </p>
        </div>
        <div className="flex flex-row gap-6 py-4">
          <button
            className="bg-primary px-3 py-2 border-none rounded-md"
            onClick={() => notify(book?.bookId, book?.bookName)}
          >
            Wish to Read
          </button>
          <button
            className="bg-backPrimay px-3 py-2 border-none rounded-md"
            onClick={() => AddToCart(book?.bookId, book?.bookName)}
          >
            Add to Cart
          </button>
          {/* <Button content={{ title: "Wish to Read", color: "primary" }} />
          <Button content={{ title: "Add to Cart", color: "backPrimary" }} /> */}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BookDetails;
