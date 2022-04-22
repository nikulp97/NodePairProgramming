const fs = require("fs");

module.exports = (done) => {
  fs.readdir("./", "utf8", (err, files) => {
    if (err) {
      done("Something wrong");
    } else {
      done(files.join(".\n"));
    }
  });
};

// module.exports = function () {
//   process.stdout.write("prompt > ");
//   process.stdin.on("data", (data) => {
//     const cmd = data.toString().trim();
//     if (cmd === "ls")
//       fs.readdir("./", "utf8", (err, files) => {
//         if (err) {
//           throw err;
//         } else {
//           process.stdout.write(files.join("\n"));
//           process.stdout.write("prompt > ");
//         }
//       });
//     }

//     process.stdout.write("\nprompt > ");
//   });
// };
