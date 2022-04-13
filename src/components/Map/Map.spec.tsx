import "jest";

import { render } from "@testing-library/react";
import React from "react";

import Map from "./Map";

describe("<Map />", () => {
  it("should have render", () => {
    const { getByTestId } = render(<Map testId="testId" />);
    expect(getByTestId("testId")).not.toBeNull();
  });
});
