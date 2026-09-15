const fs = require("fs");

fs.readFile("file2.txt", "utf8", function(err, data) {
    if (err) {
        console.log("Error reading file:", err);
    }else{
    fs.writeFile("file3.txt", data, function(err) {
        if (err) {
            console.log("Error in file:", err);
        }else{
        console.log("file2.txt copied to file3.txt");}
    
    });
}
});


