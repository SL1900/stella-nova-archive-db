const fs = require("fs");
const path = require("path");

const ROOT_DIR = ".";
const OUTPUT_FILE = "fileIndex.json";

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const file of list) {
    if (file.name.startsWith(".")) continue;

    const filePath = path.join(dir, file.name);
    if (file.isDirectory()) {
      results = results.concat(walk(filePath));
    } else {
      if (filePath.endsWith(OUTPUT_FILE)) continue;
      results.push(filePath.replace(/\\/g, "/"));
    }
  }
  return results;
}

const allFiles = walk(ROOT_DIR);
fs.writeFileSync(OUTPUT_FILE, JSON.stringify(allFiles, null, 2));
console.log(`Generated ${OUTPUT_FILE} with ${allFiles.length} files`);
