const fs = require("fs");

const readmePath = "README.md";
const data = fs.readFileSync(readmePath, "utf8");

const startMarker = "<!--version-start-->";
const endMarker = "<!--version-end-->";

const start = data.indexOf(startMarker);
const end = data.indexOf(endMarker);

if (start === -1 || end === -1) {
  console.error("Version markers not found in README.md");
  process.exit(1);
}

const versionText = data.substring(start + startMarker.length, end).trim();
let [major, minor, patch] = versionText.split(".").map(Number);

patch++;
const newVersion = `${major}.${minor}.${patch}`;
const updatedData =
  data.substring(0, start + startMarker.length) +
  "\n" +
  newVersion +
  "\n" +
  data.substring(end);

fs.writeFileSync(readmePath, updatedData);
console.log("New version:", newVersion);
console.log(`::set-output name=newVersion::${newVersion}`);
