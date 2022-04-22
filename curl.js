// const request = require("request");

// request("http://stackabuse.com", function (err, res, body) {
//   console.log(body);
// });

module.exports = function () {
  process.stdin.on("data", (data) => {
    let cmd = data.toString().trim();
    const commandArr = cmd.split(" ");

    if (commandArr[0] === "curl") {
      const request = require("request");
      request(commandArr[1], function (err, res, body) {
        console.log(body);
      });
    }
  });
};
