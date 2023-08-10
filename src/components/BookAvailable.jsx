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
  useColorMode,
} from "@chakra-ui/react";

export default function Book({ book, addListReading }) {
  const { colorMode } = useColorMode();
  return (
    <>
      <Card
        height={{base:"lg",md:"md"}}
        justify={"center"}
        alignItems={"center"}
        variant={"filled"}
        overflow={"hidden"}
      >
        <CardBody
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Image
            src={book.book.cover}
            alt={book.book.title}
            width={"400px"}
            height={"200px"}
            borderRadius="lg"
            objectFit={"contain"}
          />
          <Stack mt="2" mb={3} spacing="0">
            <Heading size="2xls">{book.book.title}</Heading>
            <Text fontSize="2xls" color={colorMode === "light"? "blue.900" : "blue.300"} fontWeight={"bold"}>
              Género {book.book.genre}
            </Text>
            <Text fontSize={{base:"16px",md:"14px"}}>{book.book.synopsis}</Text>
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
