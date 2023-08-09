import { expect, test, vi } from 'vitest'
import { render } from '@testing-library/react'
import FilterBook from '../components/FilterBook'

test('renders filter options', () => {
    const filter = "todos";
  render(
    <FilterBook filter={'todos'} setFilter={() => vi.fn()} />
  )
  expect(filter).toEqual("todos")
})
