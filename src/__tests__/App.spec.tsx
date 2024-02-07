import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "@app/App";
import { Nav } from "@app/partials/Nav";

jest.mock("@app/partials/Nav", () => {
  return function DummyMyComponent() {
    return <Nav />;
  };
});

describe("App Component", () => {
  it("Render App", () => {
    render(<App />);
    screen.getByText(/twygo/i);
  });

  it("Render Nav", () => {
    const { getByTestId } = render(<App />);
    const myComponentElement = getByTestId("Nav");
    expect(myComponentElement).toBeInTheDocument();
  });
});
