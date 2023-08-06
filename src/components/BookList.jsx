import React from "react";
import Book from "../components/Book"

export default function BookList({
  filterBookList,
  addListReading,
  booksAvailable,
}) {
  return (
    <>
      <div>
        <h3>
          {booksAvailable} Libros disponibles{" "}
        </h3>
        {filterBookList.map((book, index) => (
          <div key={index} >
            <Book book={book} addListReading={addListReading} />
          </div>
        ))}
      </div>
    </>
  );
}
