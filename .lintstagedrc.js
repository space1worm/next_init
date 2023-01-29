const path = require("path");

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(" --file ")}`;

const checkTypesCommand = (filenames) => `tsc --noEmit ${filenames.map((f) => path.relative(process.cwd(), f))}`;

module.exports = {
  "*.{js,jsx,ts,tsx}": [buildEslintCommand],
};
