import React from "react";
import BooksReading from "./BooksReading";
import { Grid, Heading } from "@chakra-ui/react";
import { WarningTwoIcon } from "@chakra-ui/icons";

export default function ReadingList({
  readingListBooks,
  deleteListReading,
}) {
  return (
    <>
      {readingListBooks.length === 0 ? (
        <Heading size={"md"} textAlign={"center"} >
          No hay libros disponibles <WarningTwoIcon />
        </Heading>
      ) : (
        ""
      )}
      <Grid
        templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)" }}
        gap={5}
        rowGap={5}
        padding={1}
        justifyItems={"center"}
        textAlign={"center"}
      >
        {readingListBooks.map((book, index) => (
          <BooksReading key={index} book={book} deleteListReading={deleteListReading} />
        ))}
      </Grid>
    </>
  );
}
