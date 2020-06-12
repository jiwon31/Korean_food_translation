/**가로 메뉴판 한정
 * 
 * 
 * */

mergeWord = (word, newword) => {
    vertices = new Array();
    v = {};
    /*if(word == false){
        v.x = newword[0].x;
        v.y = newword[0].y;
        vertices.push(v);
        v = {};
        v.x = newword[1].x;
        v.y = newword[1].y;
        vertices.push(v);
        v = {};
        v.x = newword[2].x;
        v.y = newword[2].y;
        vertices.push(v);
        v = {};
        v.x = newword[3].x;
        v.y = newword[3].y;
        vertices.push(v);
    }*/
    v.x = word[0].x;
    v.y = word[0].y;
    vertices.push(v);
    v = {};
    v.x = newword[1].x;
    v.y = newword[1].y;
    vertices.push(v);
    v = {};
    v.x = newword[2].x;
    v.y = newword[2].y;
    vertices.push(v);
    v = {};
    v.x = word[3].x;
    v.y = word[3].y;
    vertices.push(v);
    return vertices;
}

decideMerge = (word, newword) => {
    /*if(word == false){
        return true;
    }*/
    var min_y = Math.min(word[0].y, word[1].y);
    var max_y = Math.max(word[2].y, word[3].y);
    var diff_y = max_y - min_y;
    var new_min_y = min_y;
    var new_max_y = Math.max(newword[2].y, newword[3].y);
    var new_diff_y = new_max_y - new_min_y;
    if(diff_y * 1.3 < new_diff_y){
        return false;
    }
    else {
        return true;
    }
}

module.exports = async function(res) {
    //const textAnnotations = res.textAnnotations
    const { pages } = res.fullTextAnnotation;

    let menu = [];
    let text = '';
    pages.forEach(page => {
        page.blocks.forEach(block => {
            block.paragraphs.forEach(paragraph => {
                var push = false;
                let word = {};
                word.text = '';
                word.vertices = [];
                paragraph.words.forEach(w => {
                    console.log(w);
                    push = false;
                    
                    //var ww = w.symbols.map(s=>s.text).join('');
                    //console.log(ww);

                    if(w.symbols[0].text.match(/[0-9]|,|\(|\)|\.|\-|개|원|\[|\]|\//)){
                        if(word.text != ''){
                            menu.push(word);
                            word = {};
                            word.text = '';
                            word.vertices = [];
                        }
                    }
                    else {
                        var newtext = w.symbols.map(s => s.text).join('');
                        //console.log(newtext);

                        //merge할지 결정함
                        if(word.vertices == false){
                            flag = true;
                        }
                        else {
                            var flag = decideMerge(word.vertices, w.boundingBox.vertices);
                        }

                        //merge함
                        if(flag == true){
                            word.text += newtext;
                            if(word.vertices == false){
                                word.vertices = w.boundingBox.vertices;
                            }
                            else{
                                word.vertices = mergeWord(word.vertices, w.boundingBox.vertices);
                            }
                            //console.log(word.text);
                        }
                        else if(flag == false){
                            push = true;
                            menu.push(word);
                            word = {};
                            word.text = newtext;
                            word.vertices = w.boundingBox.vertices;
                        }
                    }
                    /*word.symbols.forEach(symbol => {
                        wordText.text += symbol;
                        wordText.vertices = mergeSymbol(wordText.vertices, symbol.boundingPoly);
                    })*/

                })
                if(push==false && word.text!=''){
                    menu.push(word);
                }
                console.log("----------------");
            })
        })
    })
    //console.log(menu);

    return menu;
}