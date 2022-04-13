import "jest";

import { render } from "@testing-library/react";

import Form from "./Form";

describe("<Form />", () => {
  it("should have render", () => {
    const { getByTestId } = render(<Form data={[]} testId="testId" />);
    expect(getByTestId("testId")).not.toBeNull();
  });
});
