var { Data } = require('../models');
const fs = require('fs');
const kfood = fs.readFileSync('./kofood.json');

make = async() => {
    var data = JSON.parse(kfood);
    /*for(var i in data){
        data[i].name = data[i].name.trim();
    }
    var menujson = JSON.stringify(data);
    fs.writeFileSync('kfood.json', menujson);*/
    
    //var path = [];

    /*fs.readdir('C:/Users/kjh07/dev/foodimg', (err, files) => {
        //이미지 파일 한개 저장
        for(var i in files){
            var str = files[i].substr(0, files[i].length-5);
            for(var j in data){
                if(str == data[j].name){
                    data[j].path = "C:/Users/kjh07/dev/foodimg/"+files[i];
                    console.log(data[j].path);
                    break;
                }
            }
        }
        var newkfood = JSON.stringify(data);
        fs.writeFileSync('kofood.js', newkfood);*/


        //이미지 두개 저장
       /* for(var j in data){
            for(var i in files){
                var str = files[i].substr(0, files[i].length-5);
                if(str == data[j].name){
                    path.push("C:/Users/kjh07/dev/foodimg/"+files[i]);
                }
            }
            data[j].path = path;
            console.log(data[j].path);
            path = [];
        }
        var newkfood = JSON.stringify(data);
        fs.writeFileSync('kofood.js', newkfood);*/
    //});
    
    
    var data = JSON.parse(kofood);
    for(var i in data){
        Data.create({
            koname : data[i].name,
            enname : data[i].roman,
            en : data[i].en,
            img : data[i].path,
            info : data[i].info,
        })
        .then((result) => {
            //console.log(result);
        })
        .catch((err) => {
            console.error(err);
        });
    }
}

make();