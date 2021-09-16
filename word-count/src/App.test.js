import { render, getByTestId } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//test see if the app renders without crashing.
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
//test to require user input not empty.
it("initial state is empty or with white-space", () => {
  expect(getByTestId("required-input")).toBeRequired();
});
