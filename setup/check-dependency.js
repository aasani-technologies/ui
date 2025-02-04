const path = require("path");
const fs = require("fs-extra");
const hasYarn = require("has-yarn");
const shell = require("shelljs");

const checkDependency = async () => {
  const pkg = JSON.parse(
    (await fs.readFile(path.join(__dirname, "..", "package.json"))).toString()
  );
  if (
    pkg.name !== "@aasani-technologies/ui" &&
    !Object.keys(pkg.devDependencies).includes("@aasani-technologies/ui")
  ) {
    if (process.env.USE_NPM || !hasYarn()) {
      shell.exec("npm install --save-dev @aasani-technologies/ui");
    } else {
      shell.exec("yarn add -D @aasani-technologies/ui");
    }
  }
};

checkDependency()
  .then(() => {})
  .catch(error => console.log("ERROR", error))
  .then(() => process.exit(0));
