import React from "react";

export default function BooksReading({ book, deleteListReading }) {
  return (
    <>
      <div style={{ position: "relative  ", top: 10, left: 100}}>
        <button  onClick={() => {
          deleteListReading(book);
        }}>
           eliminar
        </button>
      </div>
      <div
        style={{
          width: "130px",
          height: "180px",
          margin: 0,
          display: "flex",
          flexDirection: "column",
          borderRadius:1
        }}
      >
        <img
          src={book.book.cover}
          alt={book.book.title}
          width={"100%"}
          height={"auto"}
        />  
      </div>
    </>
  );
}
