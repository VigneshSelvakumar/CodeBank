class Person{
    constructor(name,id,std,age,location){
        this.name=name;
        this.id=id;
        this.std=std;
        this.age=age;
        this.location=location;
    }
    getDetails(){
        return(`Student name is ${this.name} and studying in ${this.std} standard. ID & Age are ${this.id} & ${this.age}.`);
    }
}
let student1= new Person("Vignesh",7055,"12th",16);
console.log(student1.getDetails());