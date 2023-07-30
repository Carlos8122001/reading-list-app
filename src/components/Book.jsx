import React from "react";
import Card from "@mui/material/Card";
import { Box, CardContent, CssBaseline, CardActions } from "@mui/material";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Book({ book, addListReading }) {
  return (
    <>
      <CssBaseline />
      <Paper>
        <Card
          sx={{
            width: "300px",
            height: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            borderRadius: 1,
            padding: 1,
          }}
        >
          <img
            src={book.book.cover}
            alt={book.book.title}
            width={"250px%"}
            height={"350px"}
            style={{ borderRadius: "3px" }}
          />
          <CardContent>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold" }}
              textAlign={"left"}
            >
              {book.book.title}
            </Typography>
            <Typography
              variant="h6"
              textAlign={"left"}
              sx={{ fontSize: "20px" }}
            >
              Género {book.book.genre}
            </Typography>
            <Typography
              variant="h6"
              textAlign={"left"}
              sx={{ fontSize: "16px" }}
            >
              Año {book.book.year}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              onClick={() => {
                addListReading(book);
              }}
            >
              Add reading list
            </Button>
          </CardActions>
        </Card>
      </Paper>
    </>
  );
}
