// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import getByTestId from "@testing-library/jest-dom";

expect(getByTestId("required-input")).toBeRequired();
