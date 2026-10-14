const prov = (arr) => {
    let rez = [];
    for(let i = 0; i<arr.length; i++){
        let b = arr[i];

        if(!rez.includes(b)){
            rez.push(b);
        }
    }
    return rez;
}
console.log(prov([1,1,3,3,4,4,6,6,6]));