const fs = require('fs');

// fs.writeFile("firstBackendFile.txt","This is my first code in backend",(err)=>{
//     if(err){console.log(err)}
//     else{console.log("done")}
// })

// fs.appendFile("firstBackendFile.txt","And this is second code in Backend",(err)=>{
//     if(err){console.log(err)}
//     else{console.log("done2")}
// })

// fs.rename("firstBackendFile.txt","thirdCodeFile.txt",(err)=>{
//     if(err){console.log(err)}
//     else{console.log("done3")}
// })

// fs.copyFile("firstBackendFile.txt","./fourthCode/myFourthcode.txt",(err)=>{
//     if(err){console.log(err)}
//     else{console.log("fouth Done")}
// })

// fs.unlink("thirdCodeFile.txt",(err)=>{
//     if(err){console.log(err)}
//     else{console.log("fifth Done deletion !!")}
// })

// fs.rmdir("./fourthCode",{recursive:true},(err)=>{
//     if(err){console.log(err)}
//     else{console.log("folder Deleted")}
// })
// fs.rm("./fourthCode",{recursive:true},(err)=>{
//         if(err){console.log(err)}
//         else{console.log("folder Deleted")}
//     })

fs.readFile("firstBackendFile.txt",(err,data)=>{
    if(err){console.log(err)}
    else{console.log(data.toString())}
})
