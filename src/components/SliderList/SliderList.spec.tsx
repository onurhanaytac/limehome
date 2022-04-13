import "jest";

import { render } from "@testing-library/react";
import React from "react";

import SliderList from "./SliderList";

describe("<SliderList />", () => {
  it("should have render", () => {
    const { getByTestId } = render(<SliderList testId="testId" />);
    expect(getByTestId("testId")).not.toBeNull();
  });
});
