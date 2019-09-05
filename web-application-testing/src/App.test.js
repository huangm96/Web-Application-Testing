import React from 'react';
import { render } from "@testing-library/react";
import App, { addScore } from "./App";
import Display from './components/Display'


it('renders without crashing', () => {
  render(<App />)
});


test("add score funciton", () => {
  expect(addScore(1)).toBe(2);
  expect(addScore(3)).toBe(4);
});

test("contains ball and strike", () => {
  const { getByText } = render(<Display />);
   getByText(/balls/i);
  getByText(/strikes/i);
})