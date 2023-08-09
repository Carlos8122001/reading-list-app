import { expect, test, vi } from 'vitest'
import { render } from '@testing-library/react'
import BooksReading from '../components/BooksReading'
import { bookDataMockObject } from './mocks/bookDataMocks'

test('All books for reading', () => {
    render(
      <BooksReading book={bookDataMockObject} deleteListReading={() => vi.fn()} />
    )
    expect(bookDataMockObject.book.author.name).toEqual("J.R.R. Tolkien");
  })

test('calls deleteListReading when remove book button', () => {
  const deleteListReading = vi.fn()
  const { getByText } = render(
    <BooksReading book={bookDataMockObject} deleteListReading={deleteListReading} />
  )
  getByText('Eliminar').click()
  expect(deleteListReading).toHaveBeenCalledWith(bookDataMockObject)
})
