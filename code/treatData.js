const fs = require('fs');



module.exports.execute = async function(){

    let rawdata = fs.readFileSync('full_search_data.json');

    let pages = JSON.parse(rawdata);
    let messages = [];
    
    let filterWithWords = ["arrow_forward", "double_vertical_bar", "black_square_for_stop"];
    
    function getMessages(page){
        for (const items of page.items) {
            for (const message of items.messages) {
                messages.push({
                    date: new Date(message.ts * 1000),
                    ts: message.ts,
                    text: message.text
                });
            }
        }
    }

    for (const page of pages) {
        getMessages(page);
    }
    
    messages = messages.sort((a,b)=>{
        return a.ts - b.ts;
    });
    
    messages = messages.filter((message) => {
        for (const wordToFilter of filterWithWords) {
            if(message.text.indexOf(wordToFilter) >= 0){
                return true;
            }
        }
        return false;
    });
    
    fs.writeFileSync(`treated_data.json`, JSON.stringify(messages));

};


