const fs = require("fs");
const path = require("path");

const sourceDir = process.argv[2];
const destinationDir = process.argv[3];
const extension = process.argv[4];

if (!fs.existsSync(destinationDir)) {
    fs.mkdirSync(destinationDir);
}

const files = fs.readdirSync(sourceDir);

for (let file of files) {
    if (path.extname(file) === extension) {
        const sourceFile = path.join(sourceDir, file);
        const destinationFile = path.join(destinationDir, file);
        fs.copyFileSync(sourceFile, destinationFile);
        console.log("Copied:", file);
    }
}
