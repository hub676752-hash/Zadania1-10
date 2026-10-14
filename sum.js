const pod = (arr) => {
    let sum = 0;

    for(let i = 0; i,arr.length;i++){
        sum += arr[i];
    }
    let sr = sum/arr.length;
    return{
        sum: sum,
        srZnach: sr
    };
};
console.log(pod([1,2,3,4,5]));