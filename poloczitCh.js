const pol = (arr) => {
    let rez = [];

    for(let i = 0; i<arr.length;i++){
        if(arr[i]>0){
            rez.push(arr[i]);
        }
    }
    return rez;
}

console.log(pol([-1,-4,-6,2,3,5,-13,56]));