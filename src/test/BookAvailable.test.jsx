import { expect, test, vi } from 'vitest'
import { render } from '@testing-library/react'
import Book from '../components/BookAvailable'

test('calls addListReading when add button is clicked', () => {
  const book = {
    book: {
      cover: 'cover.jpg',
      title: 'Book Title',
      genre: 'Fiction',
      synopsis: 'Book Synopsis',
      year: 2021,
    },
  }
  const addListReading = vi.fn()
  const { getByText } = render(
    <Book book={book} addListReading={addListReading} />
  )
  getByText('Agregar').click()
  expect(addListReading).toHaveBeenCalledWith(book)
})
