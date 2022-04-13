module.exports = (componentName) => ({
  content: `import React from "react";
import clsx from "clsx";

import { IBase } from "@/types";

import { ${componentName}Props } from "./${componentName}.types";
import useStyles from "./${componentName}.styles";

const ${componentName}: React.FC<${componentName}Props & IBase> = ({
  testId,
  style,
  className,
  children
}: ${componentName}Props & IBase) => {
  const classes = useStyles();

  return (
    <>
      <div
        data-testid={testId}
        style={style}
        className={clsx(classes.root, className)}
      >
        {children}
      </div>
    </>
  );
};

export default ${componentName};
`,
  extension: `.tsx`
});
