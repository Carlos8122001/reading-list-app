import React from "react";

export default function Book({ book, addListReading }) {
  return (
    <>
      <div
      >
        <img
          src={book.book.cover}
          alt={book.book.title}
          width={"250px%"}
          height={"350px"}
          style={{ borderRadius: "3px" }}
        />
        <h6>{book.book.title}</h6>
        <h6>Género {book.book.genre}</h6>
        <h6>Año {book.book.year}</h6>
        <button
          onClick={() => {
            addListReading(book);
          }}
        >
          Add reading list
        </button>
      </div>
    </>
  );
}
