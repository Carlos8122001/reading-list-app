/* eslint-disable react/prop-types */
import { PlusSquareIcon } from "@chakra-ui/icons";
import {
  Button,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function Book({ book, addListReading }) {
  return (
    <>
      <Card size={"sm"}  justify={"center"} alignItems={"center"} variant={"filled"}>
        <CardBody>
          <Image
            src={book.book.cover}
            alt={book.book.title}
            width={"280px"}
            maxH={"400px"}
            borderRadius="lg"
          />
          <Stack mt="6" mb={6} spacing="0">
            <Heading size="md">{book.book.title}</Heading>
            <Text fontSize="2xls" color={"blue.900"} fontWeight={"bold"}>
              Género {book.book.genre}
            </Text>
            <Text>{book.book.synopsis}</Text>
            <Text fontWeight={"bold"}>Año {book.book.year}</Text>
          </Stack>
          <Button
            variant="solid"
            colorScheme="blue"
            size={"lg"}
            name="agregar"
            onClick={() => {
              addListReading(book);
            }}
          >
            Agregar
            <PlusSquareIcon ml={1} />
          </Button>
        </CardBody>
      </Card>
    </>
  );
}
