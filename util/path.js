const path = require('path');

//getting parent's directory
module.exports = path.dirname(process.mainModule.filename);

/*mainModule ->app.js
dirname--> directory name
process ->global variable
filename --> thefile running
this filename is put into the dirnma to get the path to that directory */
