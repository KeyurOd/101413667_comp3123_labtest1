const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');

function removeLogFiles() {
    fs.rm(logsDir, { recursive: true, force: true }, (err) => {
        if (err && err.code !== 'ENOENT') throw err;
        if (!err) console.log('Logs directory and files removed.');
        else console.log('Logs directory does not exist.');
    });
}

removeLogFiles();
