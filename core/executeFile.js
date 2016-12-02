const execFile = require('child_process').execFile;

const execute = function (filePath, success, err) {
    const child = execFile(filePath, (error, stdout, stderr) => {
        if (error) {
            return err(Error(error));
        }
        return success(stdout);
    });
};


/*
const execute = function (filePath, data) {
    const child = execFile(filePath, (error, stdout, stderr) => {
        if (error) {
            return data(Error(error));
        }
        return data(stdout.toString());
    });
};
*/
module.exports = execute;