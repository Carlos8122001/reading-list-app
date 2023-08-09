/* eslint-disable react/prop-types */
import {
  Button,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

export default function BooksReading({ book, deleteListReading }) {
  return (
    <>
      <Card size={"sm"} justify={"center"} alignItems={"center"}>
        <CardBody>
          <Image
            src={book.book.cover}
            alt={book.book.title}
            width={"280px"}
            maxH={"400px"}
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3" mb={6}>
            <Heading size="md">{book.book.title}</Heading>
            <Text fontSize="2xls" color={"blue.900"} fontWeight={"bold"}>
              Género {book.book.genre}
            </Text>
            <Text>{book.book.synopsis}</Text>
            <Text fontWeight={"bold"}>Año {book.book.year}</Text>
          </Stack>
          <Button
            variant="solid"
            colorScheme="red"
            size={"lg"}
            onClick={() => {
              deleteListReading(book);
            }}
          >
            Eliminar
            <DeleteIcon ml={1} />
          </Button>
        </CardBody>
      </Card>
    </>
  );
}
