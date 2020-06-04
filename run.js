const download = require('./code/download');
const treatData = require('./code/treatData');
const generateCSV = require('./code/generateCSV');

async function executeAll(){
    await download.execute();
    await treatData.execute();
    await generateCSV.execute();
}

executeAll();