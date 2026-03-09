const fs = require("fs");

function getVersion(){
    return fs.readFileSync("version.txt","utf8")
}

module.exports = getVersion