import { useEffect, useMemo, useState } from "react";
import BookList from "./components/BookList";
import ReadingList from "./components/ReadingList";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { data } from "./data/bookData";

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

  console.log(data)

  return (
    <>
      <Select
        name="gender"
        id="gener"
        value={filter}
        onChange={(event) => {
          setFilter(event.target.value);
        }}
        variant="outlined"
        sx={{ margin: 2, width: "200px" }}
      >
        <MenuItem value="todos">Todos</MenuItem>
        <MenuItem value="Fantasía">Fantasía</MenuItem>
        <MenuItem value="Ciencia ficción">Ciencia ficción</MenuItem>
        <MenuItem value="Zombies">Zombies</MenuItem>
        <MenuItem value="Terror">Terror</MenuItem>
      </Select>

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
