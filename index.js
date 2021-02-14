const { exec } = require("child_process");
const Discord = require("discord.js");
const client = new Discord.Client();
var fs = require('fs');

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})
client.on("message", (msg) => {
  if (msg.content === "!host") {
function f1(){
    const exe1 = exec("pxlworld.bat", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
    exe1.on('close', (code) => {
      console.log(`child process close all stdio with code ${code}`);
      msg.reply('Server is Closed');
    });
}
function f2(){
    const exe2 = exec("port_proper.bat", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
}

function f3(){
  fs.readFile('port.txt', 'utf8', function(err, data) {
      if (err) throw err;
      console.log(data);
      var port=data;
      String(port);
      msg.reply('Hosted at Port: ' + port + ' and Server Password: hello');
  });
}
f1();
setTimeout(f2,1000);
setTimeout(f3,4000);



    //msg.reply("Server is Hosted at...")
  }
})
client.login("Write Your Token here-dummy line")
