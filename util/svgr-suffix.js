const fs = require("fs");
const path = require("path");

const files = fs.readdirSync(path.join(__dirname, "../src/assets/icons"));

files.forEach((file) => {
  let [name] = file.split(".");

  if (~name.indexOf("Svg")) {
    return;
  }

  fs.renameSync(
    path.join(__dirname, "../src/assets/icons", file),
    path.join(__dirname, "../src/assets/icons", `${name}.svg`)
  );
});
