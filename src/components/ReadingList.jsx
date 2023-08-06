import React from "react";
import BooksReading from "./BooksReading";

export default function ReadingList({
  readingListBooks,
  deleteListReading,
  readingListBooksAvailable,
}) {
  return (
    <>
      <div>
        <div>
          <h4>Lista de lectura</h4>
          <h6>Cantidad {readingListBooksAvailable}</h6>
          <div>
            {readingListBooks.map((book, index) => (
              <div key={index} item>
                <BooksReading
                  book={book}
                  deleteListReading={deleteListReading}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
