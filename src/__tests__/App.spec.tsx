import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "@app/App";

describe("App Component", () => {
  it("test", () => {
    render(<App />);
    screen.getByText("Twygo");
  });
});
