


const a = { 
    name:"Ayush",
    age:21,
    hobbies:["Reading","Coding","Sleeping"]
}

console.log(a)
const b = Object.values(a);
console.log(b)

class Employee{
    constructor(Name, Age){
        this.Name = Name;
        this.Age = Age;
    }


    greetEmp(){                                      // Method in java 

        console.log(`Welcome ${this.Name}`);
    }
}

const Employee1 = new Employee("Ayush", 21);
const Employee2 = new Employee("Ayush", 21);
const Employee3 = new Employee("Ayush", 21);
const Employee4 = new Employee("Ayush", 21);

console.log(Employee1.Name);

const  c= Object.values(Employee1);

console.log(c);

Employee1.greetEmp()

