/* eslint-disable react/prop-types */
import { Box, Select } from "@chakra-ui/react";

export default function FilterBook({ filter, setFilter }) {
  return (
    <>
      <Box display={"flex"} justifyContent={"center"}>
      <Select
        size="lg"
        variant={"filled"}
        width={{ base:"100%", md: "250px",lg: "350px"}}
        value={filter}
        onChange={(event) => {
          setFilter(event.target.value);
        }}
        margin={5}
      >
        <option value="todos">Todos</option>
        <option value="Fantasía">Fantasía</option>
        <option value="Ciencia ficción">Ciencia ficción</option>
        <option value="Zombies">Zombies</option>
        <option value="Terror">Terror</option>
      </Select>
      </Box>
    </>
  );
}
