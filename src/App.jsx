import { useEffect, useMemo, useState } from "react";
import BookList from "./components/BookList";
import ReadingList from "./components/ReadingList";
import { data } from "./data/bookData";
import FilterBook from "./components/FilterBook";
import {
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
  IconButton,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

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
    }, 1000);
  }, []);

  const getReadinListLocalStorage = () => {
    window.addEventListener("storage", (event) => {

      if(event.key === "KEY_READING_LIST"){
        const storereadingListBooks = JSON.parse(
          localStorage.getItem("KEY_READING_LIST")
        );

        if (storereadingListBooks) {
          setReadingListBooks(storereadingListBooks);
        }
      }
    });
  };

  const getListBookLocalStorage = () => {
    window.addEventListener("storage", (event) => {

      if(event.key === "KEY_BOOK_LIST"){
        const storageListBooks = JSON.parse(
          localStorage.getItem("KEY_BOOK_LIST")
        );

        if (storageListBooks) {
          setBooks(storageListBooks);
        }
      }
    });
  };

  useEffect(() => {
    getListBookLocalStorage();
    getReadinListLocalStorage();
  }, []);

  useEffect(() => {
    localStorage.setItem("KEY_BOOK_LIST", JSON.stringify(books));
  }, [books]);

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
      <IconButton
        aria-label="Search database"
        icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
        margin={4}
        position={"absolute"}
        right={0}
      />
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
