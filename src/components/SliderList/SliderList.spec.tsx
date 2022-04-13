import "jest";

import { render } from "@testing-library/react";
import React from "react";

import SliderList from "./SliderList";

describe("<SliderList />", () => {
  it("should have render", () => {
    const { getByTestId } = render(
      <SliderList
        testId="testId"
        data={[
          {
            id: "string",
            img: "string",
            description: "string",
            distance: 1,
            price: 2,
            title: "string",
          },
        ]}
        onClickBook={() => {}}
        onClickCard={() => {}}
      />
    );
    expect(getByTestId("testId")).not.toBeNull();
  });
});
