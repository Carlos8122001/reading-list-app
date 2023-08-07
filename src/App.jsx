import { useEffect, useMemo, useState } from "react";
import BookList from "./components/BookList";
import ReadingList from "./components/ReadingList";
import { data } from "./data/bookData";
import FilterBook from "./components/FilterBook";
import {
  Button,
  Heading,
  Progress,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorMode,
} from "@chakra-ui/react";

function App() {
  const [books, setBooks] = useState([]);
  const [readingListBooks, setReadingListBooks] = useState([]);
  const [filter, setFilter] = useState("todos");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setBooks(data);
      setLoading(false);
      console.log("carga finalizada");
    }, 1700);
  }, []);

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

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Heading as="h1" size="3xl" noOfLines={1} textAlign={"center"} margin={3}>
        Libreria
      </Heading>
      {loading ? (
        <Progress size="xs" isIndeterminate />
      ) : (
        <>
          <Tabs
            isFitted
            variant="enclosed"
            width={"container"}
            height={"full"}
            justifyContent={"center"}
            margin={5}
            rounded={10}
          >
            <FilterBook filter={filter} setFilter={setFilter} />
            <TabList mb="1em">
              <Tab>
                <Heading size={"md"}>
                  Libros disponibles ({booksAvailable})
                </Heading>
              </Tab>
              <Tab>
                <Heading size={"md"}>
                  Lista de lectura ({readingListBooksAvailable})
                </Heading>
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <BookList
                  filterBookList={filterBookList}
                  addListReading={addListReading}
                  booksAvailable={booksAvailable}
                  deleteListReading={deleteListReading}
                />
              </TabPanel>
              <TabPanel>
                <ReadingList
                  readingListBooks={readingListBooks}
                  deleteListReading={deleteListReading}
                  readingListBooksAvailable={readingListBooksAvailable}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
          <Stack spacing={3} m={2}>
            <Text>© 2023 – Creation of Carlos Velásquez</Text>
          </Stack>
        </>
      )}
    </>
  );
}

export default App;
