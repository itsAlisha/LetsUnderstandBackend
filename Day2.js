const fs = require("fs");
let text = fs.readFileSync("file1.txt", "utf-8");
text = text.replace("Alisha", "Reeta");
console.log(text);

console.log("Creating a File : ");
fs.writeFileSync("File2.txt", text);
