

class EMP{
    constructor(name,gender,dep){
        this.name=name;
        this.gender=gender;
        this.dep=dep;
    }
}



const E1 = new EMP("Ayush","MAle",50)
const E2 = new EMP("Ayush1","MAle",50)
const E3 = new EMP("Ayush2","MAle",50)
const E4 = new EMP("Ayush3","MAle",50)

let a1 = []
a1.push(E1)
a1.push(E2)
a1.push(E3)
a1.push(E4)




const l1 = Object.keys(localStorage);
        const tbody = document.getElementById("tbody");

        l1.forEach((data) => {
            let empdata = JSON.parse(localStorage.getItem(data));

            const row = document.createElement("tr");

            const name = document.createElement("td");
            name.textContent = empdata.name;
            
            const gender = document.createElement("td");
            gender.textContent = empdata.gender;

            const dep = document.createElement("td");
            dep.textContent = empdata.dep;

            row.appendChild(name);
            row.appendChild(gender);
            row.appendChild(dep);

            tbody.appendChild(row);
        });



// console.log(a1.length);

//     localStorage.setItem(1,JSON.stringify(a1))


   

//     l1.forEach((data) => {
//         const parsedData = JSON.parse(localStorage.getItem(data));
//         console.log(parsedData);
//     });
