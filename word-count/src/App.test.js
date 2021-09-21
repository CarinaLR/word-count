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
