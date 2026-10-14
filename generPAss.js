const generatPass = (length = 10) => {
    const pricol = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm~!@#$%^&*";
    let password = "";
    for(let i = 0; i<length; i++){
        let random = Math.floor(Math.random()*pricol.length);
        password += pricol[random];
    }
    return password;
}
console.log(generatPass(20));