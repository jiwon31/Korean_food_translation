var { Data } = require('../models');
const fs = require('fs');
const kofood = fs.readFileSync('./kofood.json');

make = async() => {
    var data = JSON.parse(kofood);
    for(var i in data){
        Data.create({
            koname : data[i].name,
            enname : data[i].roman,
            en : data[i].en,
            info : data[i].info,
        })
        .then((result) => {
            console.log(result);
        })
        .catch((err) => {
            console.error(err);
        });
    }
}

make();