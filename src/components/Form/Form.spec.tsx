import "jest";

import { render } from "@testing-library/react";
import * as Yup from "yup";

import Form from "./Form";

describe("<Form />", () => {
  it("should have render", () => {
    const { getByTestId } = render(
      <Form
        data={[
          {
            name: "firstName",
            label: "First Name",
            validation: Yup.string()
              .min(2, "Too Short!")
              .max(50, "Too Long!")
              .required("Required"),
          },
          {
            name: "lastName",
            label: "Last Name",
            validation: Yup.string()
              .min(2, "Too Short!")
              .max(50, "Too Long!")
              .required("Required"),
          },
          {
            name: "email",
            label: "E Mail",
            validation: Yup.string()
              .email("Invalid email")
              .required("Required"),
          },
        ]}
        testId="testId"
      />
    );
    expect(getByTestId("testId")).not.toBeNull();
  });
});
