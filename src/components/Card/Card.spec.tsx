import "jest";

import { render } from "@testing-library/react";

import Card from "./Card";

describe("<Card />", () => {
  it("should have render", () => {
    const { getByTestId } = render(
      <Card
        info={{
          id: "string",
          img: "string",
          description: "string",
          distance: 1,
          price: 2,
          title: "string",
        }}
        onClickBook={() => {}}
        onClickCard={() => {}}
        testId="testId"
      />
    );
    expect(getByTestId("testId")).not.toBeNull();
  });
});
