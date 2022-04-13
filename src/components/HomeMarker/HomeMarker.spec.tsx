import "jest";

import React from "react";
import { render } from "@testing-library/react";

import HomeMarker from "./HomeMarker";

describe("<HomeMarker />", () => {
  it("should have render", () => {
    const { getByTestId } = render(<HomeMarker testId="testId" />);
    expect(getByTestId("testId")).not.toBeNull();
  });
});
