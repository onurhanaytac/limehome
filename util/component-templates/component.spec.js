module.exports = (componentName) => ({
  content: `import "@types/jest";

  import React from "react";
import { render } from "@testing-library/react";

import ${componentName} from "./${componentName}";

describe("<${componentName} />", () => {
  it("should have render", () => {
    const { getByTestId } = render(
      <${componentName} testId="testId" />
    );
    expect(getByTestId("testId")).not.toBeNull();
  });
});
`,
  extension: `.spec.tsx`
});
