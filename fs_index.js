// Synchronous read:
const fs = require("node:fs");

const fileContents = fs.readFileSync("./file.txt", "utf-8")
console.log(fileContents);

// Asynchronous read:
fs.readFile("./file.txt","utf-8",(err,data)=> {
if (err){
    console.log(err);
    return;
} 
 console.log(data);
})

// Synchronous write:
const filewrite = fs.writeFileSync("./file.txt", "hello suraj");
console.log("data written");

// Asynchronous write:
fs.writeFile("./file.txt", "hello world again",(err, data)=>{
if(err){
    console.log(err);
    return;
}
console.log("file written asynchronous");
})

// Synchronous append:
const fileappend = fs.appendFileSync("./file.txt", "new appended data"); 
console.log("data appended");

// Asynchronous append:
fs.appendFile("./file.txt", "hello world again",(err, data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("text has been appended");
    })
    
// Synchronous delete:
fs.unlinkSync("./file.txt");
console.log("data deleted");

// Asynchronous delete:
fs.unlink("./file.txt",(err, data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("file has been deleted");
    })

