import App from "../App";
import { describe, expect, test } from "vitest";
import { render,screen } from "@testing-library/react";

describe("render App list Component", () => {
    test("should display App Book", () => {
      render(
      <App/>
      );
      expect(screen.getByText(/Libreria/i)).toBeDefined();
    });
  });