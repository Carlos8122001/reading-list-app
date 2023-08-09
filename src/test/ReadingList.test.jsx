import { expect, test, vi } from 'vitest'
import { render } from '@testing-library/react'
import ReadingList from '../components/ReadingList'
import { bookDataMockEmpty, bookDataMockTwoBook } from './mocks/bookDataMocks';

test('render readingList books empty', () => {
    render(
      <ReadingList readingListBooks={bookDataMockEmpty} deleteListReading={() => vi.fn()} />
    )
    expect(bookDataMockEmpty).toEqual([]);
  })

  test('render all readingList books', () => {

    render(
        <ReadingList readingListBooks={bookDataMockTwoBook} deleteListReading={() => vi.fn()} />
    )
    expect(bookDataMockTwoBook.length).toBe(2);
  })
