class Emp{
    constructor(name, age,id){
        this.name=name,
        this.age=age,
        this.id=id;
    }

}

// console.log(localStorage.length);
let SrId;
document.getElementById("add").addEventListener("click",()=>{
    const name = prompt("Enter Name")
    const age = prompt("Enter Age")
    const id = prompt("Enter ID")
    SrId = localStorage.length;
    let TempEmp = new  Emp(name,age,id)
    localStorage.setItem(SrId,JSON.stringify(TempEmp))
    



})
// const EMP1 = new Emp("Ayush",21,10245)
// const EMP2 = new Emp("Ram",32,1023245)
// const EMP3 = new Emp("Sam",22,120245)
// const EMP4 = new Emp("Dam",29,1230245)

// let Employees = []
// Employees.push(EMP1)
// Employees.push(EMP2)
// Employees.push(EMP3)
// Employees.push(EMP4)

// for(let i = 0;i<Employees.length;i++){
//     localStorage.setItem(i,JSON.stringify(Employees[i]))
//     //console.log(`${i} and ${Employees[i]}`);
// }

// Create a table element
const tableBody = document.getElementById("tablebody")


for(let i = 0;i<localStorage.length;i++){
    let EmpData = JSON.parse(localStorage.getItem(i))
    console.log(EmpData);
    const row = document.createElement("tr")

    const d0 = document.createElement("td")
    d0.textContent=i
    const d1 = document.createElement("td")
    d1.textContent=EmpData.name

    const d2 = document.createElement("td")
    d2.textContent=EmpData.id

    const d3 = document.createElement("td")
    d3.textContent=EmpData.age

    row.appendChild(d0)
    row.appendChild(d1)
    row.appendChild(d2)
    row.appendChild(d3)

    tableBody.appendChild(row)
}


// const table  = document.getElementsByTagName("table");
// let dataRow = table.insertRow();
// let dataCell1 = dataRow.insertCell();
// let dataCell2 = dataRow.insertCell();
// let dataCell3 = dataRow.insertCell();

// // Set data cell values
// dataCell1.innerHTML = "Data 1";
// dataCell2.innerHTML = "Data 2";
// dataCell3.innerHTML = "Data 3";







// for(let i = 0;i<Employees.length;i++){
//     localStorage.setItem(i,JSON.stringify(Employees[i]))
//     //console.log(`${i} and ${Employees[i]}`);
// }


// for(let i = 0;i<localStorage.length;i++){
//     const a =  localStorage.getItem(i)
//     JSON.parse(a)
//     console.log(a);
// }
