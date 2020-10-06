import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/** Factory function to create shallow wrapper for App component */
const setup = () => shallow(<App />);

/** Factory function to find wrapper by data-test attribute */
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test("renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

test("renders button", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "increment-button");
  expect(button.length).toBe(1);
});

test("renders counter display", () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, "counter-display");
  expect(counterDisplay.length).toBe(1);
});

/** function that finds element with data-test wrapper of countme-title and then checks to see if h2 element nested inside */
test("has a title displaying COUNTME", () => {
  const wrapper = setup();
  const findTitle = findByTestAttr(wrapper, "countme-title");
  expect(findTitle.length).toBe(1);
  expect(
    wrapper.containsMatchingElement(<h2 data-test="countme-title">COUNTME</h2>)
  ).toEqual(true);
});

test("counter starts at 0", () => {
  const wrapper = setup();
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("0");
});

test("clicking on button increments counter by 1", () => {
  const wrapper = setup();
  const counterButton = findByTestAttr(wrapper, "increment-button");
  counterButton.simulate("click");
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("1");
});

test("clicking on button decrements counter by 1", () => {
  const wrapper = setup();
  const decrementButton = findByTestAttr(wrapper, "decrement-button");
  decrementButton.simulate("click");
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("-1");
});
