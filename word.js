const findWords = (str) => {
    let rez = {};
    let word = str.toLowerCase().trim().split(/\s+/);

    for(let i = 0; i<word.length;i++){
        let words = word[i];
        if(rez[words]){
            rez[words] +=1;
        }
        else{
            rez[words] =1;
        }
    }
    return rez;
}
console.log(findWords("кот, кот, собака, собака, птица"))