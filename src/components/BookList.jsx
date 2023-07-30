import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Book from "./Book";
import Typography from "@mui/material/Typography";

export default function BookList({
  filterBookList,
  addListReading,
  booksAvailable,
}) {
  return (
    <>
      <Grid
        container
        padding={1}
        rowSpacing={2}
        columnSpacing={3}
        sx={{
          overflow: "hidden",
          width: "700px",
          marginLeft:"50px"
        }}
      >
        <Typography variant="h3" fontWeight={"bold"} margin={"20px"}>
          {booksAvailable} Libros disponibles{" "}
        </Typography>
        {filterBookList.map((book, index) => (
          <Grid key={index} item>
            <Book book={book} addListReading={addListReading} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
