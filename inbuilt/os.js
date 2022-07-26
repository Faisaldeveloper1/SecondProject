const os = require("os");
console.log(os.platform());
console.log(os.arch());
console.log(os.cpus());
console.log(`${(os.cpus()).length} cores`);
console.log(os.userInfo());
console.log(os.freemem());