const findChet = (num) => {
    if(num % 2 === 0){
        return "Четное";
    }
    else{
        return "Нечетное";
    }
}
console.log(findChet(5));