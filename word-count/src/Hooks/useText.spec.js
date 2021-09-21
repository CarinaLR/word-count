import { render, getByTestId } from "testing-library/react";
import TextBlog from "../components/TextBlog";

//The useEffect Hook implementation is essentially setting the value of the text state to the localStorage.
//Submitting a text via the input field changes the value of the text state.
//The text state is saved in the localStorage.

it("App receives a string input as text from the user.", () => {
  const { container } = render(<TextBlog />);
  const text = getByTestId(container, "required-input");
  expect(text.textContent).toBe("");
});
