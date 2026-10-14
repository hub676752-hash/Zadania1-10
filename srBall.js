const number = [4,5,4,5];
const srBall = (number) => {
    let sum = 0;
    for(let i = 0; i<number.length; i++){
        sum += number[i];
    }
    let sr = sum/number.length;
    let b = sr.toFixed(2);
    return b;
}
console.log(srBall([4,5,5,4,3,5]));