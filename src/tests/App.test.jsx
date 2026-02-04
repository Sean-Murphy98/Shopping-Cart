import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./src/App.jsx";

describe("App component", () => {
  it("renders normally", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
