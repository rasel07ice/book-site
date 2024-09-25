import "./App.css";
import Banner from "./components/Banner";
import FAQ from "./components/FAQ";
import BookList from "./components/book/BookList";
// import Book from "./components/book/Book";
// import BookDetails from "./components/book/BookDetails";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Banner />
        <BookList />
        {/* <Book />
        <BookDetails /> */}

        <FAQ />
        <Footer />
      </div>
    </>
  );
}

export default App;
