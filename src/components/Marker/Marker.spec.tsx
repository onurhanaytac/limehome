import "jest";

import React from "react";
import { render } from "@testing-library/react";

import Marker from "./Marker";

describe("<Marker />", () => {
  it("should have render", () => {
    const { getByTestId } = render(<Marker testId="testId" />);
    expect(getByTestId("testId")).not.toBeNull();
  });
});
