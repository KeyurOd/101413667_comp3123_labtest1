const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');

function createLogFiles() {
    fs.mkdir(logsDir, { recursive: true }, (err) => {
        if (err) throw err;
        console.log('Logs directory created.');
        createFiles();
    });

    function createFiles() {
        process.chdir(logsDir);

        for (let i = 1; i <= 10; i++) {
            const fileName = `log${i}.txt`;
            fs.writeFile(fileName, `This is log file #${i}.`, (err) => {
                if (err) throw err;
                console.log(`Created file: ${fileName}`);
            });
        }
    }
}

createLogFiles();
