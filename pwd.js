module.exports = function(){
    process.stdout.write("prompt > ");
    process.stdin.on("data", (data) => {
        const cmd = data.toString().trim();
      
        //process.stdout.write("You typed: " + cmd);
      
        if (cmd === "pwd") {
          console.log(`Current directory: ${process.cwd()}`);
        } else {
          process.stdout.write("You typed: " + cmd);
        }
      
        process.stdout.write("\nprompt > ");
      });
}

// process.stdout.write("prompt > ");

// process.stdin.on("data", (data) => {
//   const cmd = data.toString().trim();

//   //process.stdout.write("You typed: " + cmd);

//   if (cmd === "pwd") {
//     console.log(`Current directory: ${process.cwd()}`);
//   } else {
//     process.stdout.write("You typed: " + cmd);
//   }

//   process.stdout.write("\nprompt > ");
// });


