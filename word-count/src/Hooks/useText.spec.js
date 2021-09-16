import { render, getByTestId } from "@testing-library/jest-dom";
import App from "./App";

//The useEffect Hook implementation is essentially setting the value of the words state to the localStorage.
//Submitting a text via the input field changes the value of the words state.
//The words state is saved in the localStorage.

it("App loads with initial state of text empty", () => {
  const { container } = render(<App />);
  const text = getByTestId(container, "required-input");
  expect(text.textContent).toBe(" ");
});
