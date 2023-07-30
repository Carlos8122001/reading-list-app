import React from "react";
import BooksReading from "./BooksReading";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container, CssBaseline, Typography } from "@mui/material";
export default function ReadingList({
  readingListBooks,
  deleteListReading,
  readingListBooksAvailable,
}) {
  return (
    <>
      <Container sx={{
        display:"flex",
        alignItems:"center",
        position:"fixed",
        top:40,
        left:780,
        zIndex:1,
        width:"auto",
        padding:2
      }}>
        <Paper elevation={24} sx={{backgroundColor:"#121212"}}>
          <Typography variant="h4" textAlign={"center"} marginTop={4} fontWeight={"bold"} color={"white"}>
            Lista de lectura
          </Typography>
          <Typography variant="h6" marginLeft={2} color={"white"}>
            Cantidad {readingListBooksAvailable}
          </Typography>
          <Grid
            container
            sx={{overflowY:"scroll"}}
            spacing={1}
            height={"400px"}
            width={"480px"}
            overflow={"hidden"}
            padding={1}
            justifyContent={"center"}
            marginBottom={0}
          >
            {readingListBooks.map((book, index) => (
              <Grid key={index} item>
                <BooksReading book={book} deleteListReading={deleteListReading} />
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>
    </>
  );
}
