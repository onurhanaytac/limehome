module.exports = (componentName) => ({
  content: `import { IBase } from "@/types";

export interface ${componentName}Props extends IBase {
  label?: string;
}
`,
  extension: `.types.ts`
});
