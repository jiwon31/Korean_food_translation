const puppeteer = require('puppeteer');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');


lastpage = async(page) => {
    await page.goto("https://lampcook.com/food/food_dic_menu5.php");
    await page.waitForSelector("#paging > a:nth-child(7)");
    var obj = await page.$eval("#paging > a:nth-child(7)", element => {
        return element.href;
    });
    console.log("리턴값\n"+querystring.parse(url.parse(obj).query).pagenum);
    return querystring.parse(url.parse(obj).query).pagenum;
}

getdata = async() => {
    const browser = await puppeteer.launch({
        headless : false
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 1200 });
    var URL = "https://lampcook.com/food/food_dic_menu5.php?pagenum=";
    var max = await lastpage(page);
    var dataset = [];
    for(var i=1; i<=max; i++){
        await page.goto(URL+i, {
            waitUntil: "networkidle2"
        });
        
        maxx = 46;
        if(i==max){
            maxx =  22;
        }
        for(var j=6; j<maxx; j++){
            var data = {};
             await page.waitForSelector(`#div_main_content > div:nth-child(${j}) > div > ul > li:nth-child(1) > div`);
                    
            name = await page.$eval(`#div_main_content > div:nth-child(${j}) > div > ul > li:nth-child(1) > div`, element => element.textContent.trim());
            data.en = await page.$eval(`#div_main_content > div:nth-child(${j+1}) > ul > li:nth-child(1)`, element => element.textContent.trim());
            data.jp = await page.$eval(`#div_main_content > div:nth-child(${j+1}) > ul > li:nth-child(2)`, element => element.textContent.trim().split("\t")[0]);
            data.cn = await page.$eval(`#div_main_content > div:nth-child(${j+1}) > ul > li:nth-child(3)`, element => element.textContent.trim());
            data.koname = name.split("(")[0];
            data.enname = name.split("(")[1].split(")")[0];
        
            console.log(j+ "번째"+data.koname);
            console.log(j+ "번째"+data.enname);
            console.log(j+ "번째"+data.en);
            console.log(j+ "번째"+data.jp);
            console.log(j+ "번째"+data.cn);
            dataset.push(data);
            j++;
            //await page.goBack();
        }
    }

    fs.writeFileSync('fufood.json', JSON.stringify(dataset));
    await browser.close();
}

getdata();
