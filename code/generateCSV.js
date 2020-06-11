const fs = require('fs');
var dayjs = require('dayjs')
const dayOfYear = require('dayjs/plugin/dayOfYear')
dayjs.extend(dayOfYear)

module.exports.execute = async function(){

    let rawdata = fs.readFileSync('treated_data.json');
    let messages = JSON.parse(rawdata);
    
    let cvsContent = "";
    
    let currentDay;
    let countDays = 0;
    let dayHours = [];
    for (const message of messages) {
        let day = dayjs(message.date);
        let messageDay = day.dayOfYear();
        if (currentDay != messageDay) {
            currentDay = messageDay;
            cvsContent += "\n" + day.format("DD/MM/YYYY") + ",";
            countDays = 0;
            dayHours = [];
        }
        cvsContent += `${day.format("HH:mm")},`;
        dayHours.push(day.format("HH:mm"));
        countDays++;

        if (countDays == 4) {

            const [h1, h2, h3, h4] = dayHours;
            const data = dayjs().hour(0).minute(0).second(0);
            
            const dif1 = transformHour(h2).diff(transformHour(h1));
            const dif2 = transformHour(h4).diff(transformHour(h3));
            cvsContent += data.add(dif1 + dif2, 'ms').format("HH:mm");
        }
    }
    
    
    fs.writeFileSync(`final_data.csv`, cvsContent);   

    function transformHour (time) {
        const [hour, minute] = time.split(":");
        return dayjs().hour(hour).minute(minute);
    }

};
