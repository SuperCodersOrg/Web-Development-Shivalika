const fs = require("fs");
const path = require("path");
const { parseCookie } = require("undici-types");

const sourceDir = process.argv[2];
const destinationDir = process.argv[2];
const extension = ".txt";

fs.mkdir(destinationDir, { recursive: true }, (err) => {
    if (err) {
        console.log("Error creating directory");
        return;
    }

    fs.readdir(sourceDir, (err, files) => {

        if (err) {
            console.log("Error reading directory");
            return;
        }

        files.forEach((file) => {
            if (path.extname(file) === extension) {
                const sourceFile = path.join(sourceDir, file);
                const destinationFile = path.join(destinationDir, file);
                fs.copyFile(sourceFile, destinationFile, (err) => {
                    if (err) {
                        console.log("Error copying:", file);
                    } else {
                        console.log("Copied:", file);
                    }
                });
            }
        });
    });
});