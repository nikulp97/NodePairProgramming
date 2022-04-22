const path = require("./pwd.js");
const ls = require("./ls.js");
const cat = require("./cat.js");
const curl = require("./curl.js");
path();
ls();

//`${cat} ${fileName}`

cat();
curl();

const done = (output) => {};
