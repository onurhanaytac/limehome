module.exports = (componentName) => ({
  content: `import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(() => ({
  root: {}
}));

export default useStyles;
`,
  extension: `.styles.ts`
});
