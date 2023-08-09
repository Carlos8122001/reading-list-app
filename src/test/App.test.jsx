import App from "../App";
import { beforeAll, describe, expect, test, vi } from "vitest";
import { render,screen } from "@testing-library/react";
import { bookDataMockTwoBook } from "./mocks/bookDataMocks";

beforeAll(() => {
	const mock = vi.fn();
	mock.mockImplementation(bookDataMockTwoBook);
});

describe("render App list Component", () => {
    test("should display App Book", () => {
      render(
      <App/>
      );
      expect(screen.getByText(/Libreria/i)).toBeDefined();
    });
  });