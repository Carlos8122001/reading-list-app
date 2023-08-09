import { expect, test, vi } from 'vitest'
import { render } from '@testing-library/react'
import BookList from '../components/BookList'
import { bookDataMockEmpty, bookDataMockTwoBook } from './mocks/bookDataMocks';

test('render book empty', () => {
    render(
      <BookList filterBookList={bookDataMockEmpty} addListReading={() => vi.fn()} booksAvailable={0} deleteListReading={() => vi.fn()} />
    )
    expect(bookDataMockEmpty).toEqual([]);
  })

  test('render all books', () => {

    render(
        <BookList filterBookList={bookDataMockTwoBook} addListReading={() => vi.fn()} booksAvailable={2} deleteListReading={() => vi.fn()} />
    )
    expect(bookDataMockTwoBook.length).toBe(2);
  })
