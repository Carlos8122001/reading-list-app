import React from "react";
import Book from "../components/BookAvailable";
import { Grid, Heading } from "@chakra-ui/react";
import { WarningTwoIcon } from "@chakra-ui/icons";

export default function BookList({ filterBookList, addListReading }) {
  return (
    <>
      {filterBookList.length === 0 ? (
        <Heading size={"md"} textAlign={"center"}>
          No hay libros disponibles <WarningTwoIcon />
        </Heading>
      ) : (
        ""
      )}
      <Grid
        templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)",lg: "repeat(4, 1fr)" }}
        gap={5}
        rowGap={5}
        padding={1}
        justifyItems={"center"}
        textAlign={"center"}
      >
        {filterBookList.map((book, index) => (
          <Book key={index} book={book} addListReading={addListReading} />
        ))}
      </Grid>
    </>
  );
}
