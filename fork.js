var cp = require("child_process");
cp.fork('./script', ['foo'], {
    execArgv: ['--inspect=6001'] // neither this works, nor --inspect-brk
});