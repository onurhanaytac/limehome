import "jest";

import { render } from "@testing-library/react";
import React from "react";

import FormInput from "./FormInput";

describe("<FormInput />", () => {
  it("should have render", () => {
    const { getByTestId } = render(
      <FormInput name="testName" testId="testId" />
    );
    expect(getByTestId("testId")).not.toBeNull();
  });
});
