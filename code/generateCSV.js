const fs = require('fs');
var dayjs = require('dayjs')
const dayOfYear = require('dayjs/plugin/dayOfYear')
dayjs.extend(dayOfYear)

module.exports.execute = async function(){

    let rawdata = fs.readFileSync('treated_data.json');
    let messages = JSON.parse(rawdata);
    
    let cvsContent = "";
    
    let currentDay;
    for (const message of messages) {
        let day = dayjs(message.date);
        let messageDay = day.dayOfYear();
        if (currentDay != messageDay) {
            currentDay = messageDay;
            cvsContent += "\n" + day.format("DD/MM/YYYY") + ",";
        }
        cvsContent += `${day.format("HH:mm")},`;
    }
    
    
    fs.writeFileSync(`final_data.csv`, cvsContent);   

};