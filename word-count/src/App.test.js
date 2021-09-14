import { render, screen, getByTestId } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

//test see if the app renders without crashing.
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("initial state is empty or with white-space", () => {
  expect(getByTestId("required-input")).toBeRequired();
});
