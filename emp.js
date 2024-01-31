function GetEmp(){
    const storedData = localStorage.getItem("employee");
  return storedData ? JSON.parse(storedData) : [];
}


function SaveEmp(data){
    localStorage.setItem("employee",JSON.stringify(data))
}




const employee = GetEmp()
console.log(employee.length);

function DisplayEmp(){
    const tbody = document.getElementById("tbody")
    if(employee.length ==0){
        document.getElementById("table").style.display="none"
        return
    }
    tbody.innerHTML=""
    document.getElementById("table").style.display="table"
    employee.forEach(employees => {
        const row = tbody.insertRow()
        row.innerHTML=`
        <td>${employees.id}</td>
        <td>${employees.name}</td>
        <td>${employees.dep}</td>

        `
    });

}

function AddEmp(){
    const name = prompt("Enter Name")
    const dep = prompt("Enter Name")
        console.log(employee.length);
    let EMP = {
        id:employee.length+1,
        name:name,
        dep:dep
    }

    employee.push(EMP)
    SaveEmp(employee)
    DisplayEmp()
}

function UpdateEmp(){
    const id = prompt("Enter ID")

    const UpdatEMP = employee.find((emp)=>emp.id==id)
    console.log(UpdatEMP);
    if(UpdatEMP){
        const name = prompt("Enter Name")
        const dep = prompt("Enter DEP")
        UpdatEMP.name=name
        UpdatEMP.dep=dep
    }

    SaveEmp(employee)
    DisplayEmp()
}

function DelEmp(){
    const id = prompt("Enter ID")
    const empIndex = employee.findIndex(emp => emp.id === parseInt(id));

   
    if(empIndex!== -1){
        console.log("Entered");
        employee.splice(empIndex,1)
        SaveEmp(employee)
        DisplayEmp()
    }
}

DisplayEmp()

document.getElementById("add").addEventListener("click",()=>{
    console.log("HII");
    AddEmp()
})
document.getElementById("update").addEventListener("click",()=>{
    UpdateEmp()
})
document.getElementById("delete").addEventListener("click",()=>{
    DelEmp()
})