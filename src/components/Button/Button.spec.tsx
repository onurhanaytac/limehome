import "jest";

import { render } from "@testing-library/react";
import React from "react";

import Button from "./Button";

describe("<Button />", () => {
  it("should have render", () => {
    const { getByTestId } = render(
      <Button onClick={() => {}} testId="testId" />
    );
    expect(getByTestId("testId")).not.toBeNull();
  });
});
