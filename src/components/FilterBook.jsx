import React from 'react'

export default function FilterBook({filter,setFilter}) {
  return (
    <>
    <select
        name="gender"
        id="gener"
        value={filter}
        onChange={(event) => {
          setFilter(event.target.value);
        }}
      >
        <option value="todos">Todos</option>
        <option value="Fantasía">Fantasía</option>
        <option value="Ciencia ficción">Ciencia ficción</option>
        <option value="Zombies">Zombies</option>
        <option value="Terror">Terror</option>
      </select>
    </>
  )
}
