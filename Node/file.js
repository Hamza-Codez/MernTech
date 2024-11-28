const fs = require("fs");

// fs.writeFileSync("./test.txt", "Hello World");
//sync ...

// fs.writeFile("./testasync.txt", "Hello World async " ,(error)=>{})
// async


// const result = fs.readFileSync("./contact.txt", "utf8")
// console.log(result)


fs.readFile("./contact.txt", "utf8", (err, result)=>{
  if (err) {
    console.log("Error", err);
  } else {
    console.log(result);
  }
})
