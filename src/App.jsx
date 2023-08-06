import { useEffect, useMemo, useState } from "react";
import BookList from "./components/BookList";
import ReadingList from "./components/ReadingList";
import { data } from "./data/bookData";
import FilterBook from "./components/FilterBook";

function App() {
  const [books, setBooks] = useState([]);
  const [readingListBooks, setReadingListBooks] = useState([]);
  const [filter, setFilter] = useState("todos");

  useEffect(()=>{
    setBooks(data)
  },[])

  useEffect(() => {
    const storereadingListBooks = JSON.parse(
      localStorage.getItem("KEY_READING_LIST")
    );
    if (storereadingListBooks) {
      setReadingListBooks(storereadingListBooks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("KEY_READING_LIST", JSON.stringify(readingListBooks));
  }, [readingListBooks]);

  const addListReading = (book) => {
    const newValues = filterBookList.filter((element) => element !== book);
    setBooks(newValues);
    setReadingListBooks([...readingListBooks, book]);
  };

  const deleteListReading = (book) => {
    const newValues = readingListBooks.filter((element) => element !== book);
    setReadingListBooks(newValues);
    setBooks([...books, book]);
  };

  let filterBookList = useMemo(() => {
    const copyBookList = books.filter((book) => book.book.genre === filter);
    return filter === "todos" ? books : copyBookList;
  }, [books, filter]);

  const booksAvailable = filterBookList.length;

  const readingListBooksAvailable = readingListBooks.length;

  return (
    <>
      <FilterBook filter={filter} setFilter={setFilter}/>

      <BookList
        filterBookList={filterBookList}
        addListReading={addListReading}
        booksAvailable={booksAvailable}
        deleteListReading={deleteListReading}
      />

      <ReadingList
        readingListBooks={readingListBooks}
        deleteListReading={deleteListReading}
        readingListBooksAvailable={readingListBooksAvailable}
      />
    </>
  );
}

export default App;
