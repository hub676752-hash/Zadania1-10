const group = (people) => {
    let grop = {
        "До 18": [],
        "18-30": [],
        "31+": []
    }

    for(let i = 0; i < people.length; i++){
        let person = people[i];

        if(person.age < 18){
            grop["До 18"].push(person.name);
        }
        else if(person.age <= 30){
            grop["18-30"].push(person.name);
        }
        else{
            grop["31+"].push(person.name);
        }
    }
    return grop;
}
let user = [
    {name: "Anna", age: 14},
    {name: "Devid", age: 36},
    {name: "Anais", age: 24},
    {name: "Victor", age: 32},
    {name: "Petr", age: 78},
    {name: "Salim", age: 45}
];
console.log(group(user));