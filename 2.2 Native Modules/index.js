const fs = require("fs");  //fs stands for file system

// par1 = file address  par2 = "data", par3="if there's an error or not."
//to write data into the file.
// fs.writeFile("message.txt", "Hello from Ajay\nI hope you are doing well.", (err) => {
//     if (err) throw err;
//     console.log("the file has been saved..");
// })

//to read data from the file
fs.readFile("./message.txt", "utf8", (err, data)=>{
    if (err) throw err;
    console.log(data);  //giving the encoded data. we gotta decode it.
})
