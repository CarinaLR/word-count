import { render, getByTestId } from "@testing-library/jest-dom";
import App from "./App";

//The useEffect Hook implementation is essentially setting the value of the text state to the localStorage.
//Submitting a text via the input field changes the value of the text state.
//The text state is saved in the localStorage.

it("App receives a string input as text from the user.", () => {
  const { container } = render(<App />);
  const text = getByTestId(container, "required-input");
  expect(text.textContent).toBe("");
});
