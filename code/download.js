const fetch = require('node-fetch');
const fs = require('fs');

const quantityOfPagesToDownload = 30;

module.exports.execute = async function(){
    let pages = [];
    
    for (let index = 1; index <= quantityOfPagesToDownload; index++) {
        let res = await fetch("https://cesar.slack.com/api/search.modules?...", {
            "headers": {
                "accept": "*/*",
                "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
                "cache-control": "no-cache",
                "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryLz7bDHuWTAaOjOlN",
                "pragma": "no-cache",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-site",
                "cookie": "kasjhdkasjhdkajshdkajhsdkjahskdjhaskdjhaskjdhaskjdhkasjd"
            },
            "referrerPolicy": "no-referrer",
            "body": "body values",
            "method": "POST",
            "mode": "cors"});

        let result = await res.json();
        pages.push(result);
    }

    fs.writeFileSync(`full_search_data.json`, JSON.stringify(pages));
};

