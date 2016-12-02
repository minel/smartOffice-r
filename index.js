const config = require('./core/config');
const executeFile = require('./core/executeFile');

const nsisPath = config.nsisPath;
const registryPath = config.registryPath;

const pExecuteNsis = function () {
    return new Promise((resolve, reject) => {
        executeFile(nsisPath, (data) => {
            resolve(data);
        }, (err) => {
            reject(err);
        });
    })
};

const pExecuteReg = function () {
    return new Promise((resolve, reject) => {
        executeFile(registryPath, (data) => {
            resolve(data);
        }, (err) => {
            reject(err);
        });
    })
};

/*
const pExecuteNsis = new Promise((resolve, reject) => {
    executeFile(nsisPath, (data) => {
        resolve(data);
    }, (err) => {
        reject(err);
    });
});

const pExecuteReg = new Promise((resolve, reject) => {
    executeFile(registryPath, (data) => {
        resolve(data);
    }, (err) => {
        reject(err);
    });
});

*/
/*
const pExecute = new Promise(function(resolve, reject) {
    executeFile(filePath, function(data){
        if(data.name == 'Error') {
            reject(data);
        }
        else {
            resolve(data);
        }
    });
});
*/

pExecuteNsis().then((result) => {
    console.log('executeNsis is succeed', result);
    return pExecuteReg();
}).then((result) => {
    console.log('pExecuteReg succeed!');
});