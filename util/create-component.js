require("colors");
const fs = require("fs");
const templates = require("./component-templates");

const componentName = process.argv[2];

if (!componentName) {
  console.error("Please supply a valid component name".red);
  process.exit(1);
}

console.log("Creating Component Templates with name: " + componentName);

const componentDirectory = `./src/components/${componentName}`;

if (fs.existsSync(componentDirectory)) {
  console.error(`Component ${componentName} already exists.`.red);
  process.exit(1);
}

let cpmIndex = fs.readFileSync("./src/components/index.ts", "utf-8");
let cpmIndexArr = [...cpmIndex.split("\n")];

let index = 0;
cpmIndexArr.forEach((item, i) => {
  if (!index && item == "\r") {
    index = i;
  }
});

if (index) {
  cpmIndexArr.splice(
    index,
    0,
    `import ${componentName} from "./${componentName}";\r`
  );
  cpmIndexArr[cpmIndexArr.length - 3] = cpmIndexArr[
    cpmIndexArr.length - 3
  ].replace("\r", ",\r");
  cpmIndexArr.splice(cpmIndexArr.length - 2, 0, `  ${componentName}\r`);
  cpmIndex = cpmIndexArr.join("\n");

  fs.writeFileSync("./src/components/index.ts", cpmIndex);
} else {
  console.log("Exports cannot added to /src/components/index.ts".yellow);
  console.log("Don't forget to export in /src/components/index.ts".yellow);
}

fs.mkdirSync(componentDirectory);

const generatedTemplates = templates.map((template) => template(componentName));

generatedTemplates.forEach((template) => {
  const fileName = template.extension === ".ts" ? "index" : componentName;
  fs.writeFileSync(
    `${componentDirectory}/${fileName}${template.extension}`,
    template.content
  );
});

console.log(
  "Successfully created component under: " + componentDirectory.green
);
