const fs = require("fs");

/*
module.exports = function (fileName) {
  process.stdin.on("data", (data) => {
    const cmd = data.toString().trim();
    if (cmd === "cat") {
      fs.readFile("/etc/passwd", (err, data) => {
        if (err) throw err;
        console.log(data);
      });
    }
    process.stdout.write("\nprompt > ");
  });
};
*/
//   //process.stdout.write("You typed: " + cmd);  fs.readFile('./', 'utf8', (err, files) =>{
//       if(err){
//           throw err;
//       }else{
//           process.stdout.write(files.join('\n'))
//           process.stdout.write("prompt > ")
//       }
//   })
module.exports = function () {
  process.stdin.on("data", (data) => {
    let cmd = data.toString().trim();
    const commandArr = cmd.split(" ");

    if (commandArr[0] === "cat") {
      const fs = require("fs");
      fs.readFile(commandArr[1], "utf8", (err, files) => {
        if (err) {
          throw err;
        } else {
          process.stdout.write(files);
          process.stdout.write("\nprompt > ");
        }
      });
    }
  });
};
