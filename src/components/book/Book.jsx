import { Link } from "react-router-dom";
import { ROUTES } from "../../routes/index";
import Button from "../utilityComponents/Button";
import Rating from "./Rating";
import Tag from "./Tag";

const Book = ({ book }) => {
  return (
    <div>
      <div className="bg-gray-200 shadow-md rounded-sm max-w-lg mx-auto">
        <div className="p-5 relative">
          <img className="w-11/12 h-48 mx-auto" src={book?.image} alt="book" />
          <p className="absolute bottom-5 right-5 px-3 py-2 bg-primary text-white">
            {book?.category}
          </p>
        </div>
        <div className="px-4">
          <p className="font-Roboto font-semibold text-lg">{book?.bookName}</p>
          <p>{book?.author}</p>
          <p className="space-x-3">
            {book?.tags?.map((tag, index) => (
              <Tag key={index} tag={tag} />
            ))}
          </p>
          <div>
            <Rating rating={book?.rating} />
            {/* <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star-half-stroke"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i> */}
          </div>
        </div>
        <div className="py-4 px-4">
          <Link to={ROUTES.SINGLE_BOOK.DYNAMIC(book.bookId)}>
            <Button content={{ title: "Book Details", color: "primary" }} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Book;
