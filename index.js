import fs from "fs";
import { writeFile } from "node:fs/promises";

fs.writeFileSync("texto.txt", "helllo from node.js", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("file created");
  }
});


try {
await writeFile("hello.txt", "Hello from Node.js 😊");
console.log("archivo creado");
} catch (error) {
console.log(error);
}
