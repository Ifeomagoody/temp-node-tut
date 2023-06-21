const { log } = require('console');
const os = require('os');

//info about current user
const user = os.userInfo()
console.log(user);


//this method returns the system uptime in seconds

console.log(`The system uptime is ${os.uptime()} seconds`)

const currentos = {
    name: os.type(),
    release:os.release(),
    totelMem:os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentos)