const fs = require('fs');

module.exports = function(fileName){
process.stdout.write("prompt > ");
    process.stdin.on("data", (data) => {
        const cmd = data.toString().trim();
      
        //process.stdout.write("You typed: " + cmd);
      if(cmd === "cat"){
        //   fs.readFile('./', 'utf8', (err, files) =>{
        //       if(err){
        //           throw err;
        //       }else{
        //           process.stdout.write(files.join('\n'))
        //           process.stdout.write("prompt > ")
        //       }
        //   })

        fs.readFile('/etc/passwd', (err, data) => {
            if (err) throw err;
            console.log(data);
          });
      }

        process.stdout.write("\nprompt > ");
      });
    }