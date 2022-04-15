import "jest";

import { render } from "@testing-library/react";
import React from "react";

import AppBar from "./AppBar";

describe("<AppBar />", () => {
  it("should have render", () => {
    const { getByTestId } = render(<AppBar testId="testId" />);
    expect(getByTestId("testId")).not.toBeNull();
  });
});
