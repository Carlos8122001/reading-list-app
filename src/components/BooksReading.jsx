import React from "react";
import Card from "@mui/material/Card";
import { Box, CardContent, CssBaseline, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

export default function BooksReading({ book, deleteListReading }) {
  return (
    <>
      <CssBaseline />
      <Box sx={{ position: "relative  ", top: 10, left: 100}}>
        <IconButton aria-label="delete" size="large" color="info"  onClick={() => {
          deleteListReading(book);
        }}>
          <HighlightOffIcon  />
        </IconButton>
      </Box>
      <Card
        sx={{
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
      </Card>
    </>
  );
}
