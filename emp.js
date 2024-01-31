<<<<<<< HEAD
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
=======
// Function to get employee data from localStorage
function getEmployeeData() {
  const storedData = localStorage.getItem("employees");
  return storedData ? JSON.parse(storedData) : [];
}

// Function to save employee data to localStorage
function saveEmployeeData(data) {
  localStorage.setItem("employees", JSON.stringify(data));
}

// Initialize employees array with data from localStorage or an empty array
const employees = getEmployeeData();

function displayEmployees() {
  const employeeTableBody = document.getElementById("employeeBody");

  // Check if there are employees in the array
  if (employees.length === 0) {
    // Hide the table if there are no employees
    document.getElementById("employeeTable").style.display = "none";
    return;
  }

  // Clear previous content
  employeeTableBody.innerHTML = "";

  // Show the table
  document.getElementById("employeeTable").style.display = "table";

  // Populate the table with employee data
  employees.forEach((employee) => {
    const row = employeeTableBody.insertRow();
    row.innerHTML = ` <td>${employee.id}</td><td>${employee.name}</td><td>${employee.position}</td>`;
  });
}

function addEmployee() {
  const name = prompt("Enter employee name:");
  const position = prompt("Enter employee position:");

  const newEmployee = {
    id: employees.length + 1,
    name: name,
    position: position,
  };

  employees.push(newEmployee);
  saveEmployeeData(employees);
  displayEmployees();
}

function updateEmployee() {
  const idToUpdate = prompt("Enter the ID of the employee to update:");
  const employeeToUpdate = employees.find(
    (employee) => employee.id == idToUpdate
  );

  if (employeeToUpdate) {
    const newName = prompt(`Enter new name for ${employeeToUpdate.name}`);
    const newPosition = prompt(
      `Enter new position for ${employeeToUpdate.name}`
    );

    employeeToUpdate.name = newName;
    employeeToUpdate.position = newPosition;

    saveEmployeeData(employees);
    displayEmployees();
  } else {
    alert("Employee not found.");
  }
}

function deleteEmployee() {
  const idToDelete = prompt("Enter the ID of the employee to delete:");
  const indexToDelete = employees.findIndex(
    (employee) => employee.id == idToDelete
  );

  if (indexToDelete !== -1) {
    employees.splice(indexToDelete, 1);
    saveEmployeeData(employees);
    displayEmployees();
  } else {
    alert("Employee not found.");
  }
}

// Call displayEmployees initially
displayEmployees();
>>>>>>> f32a29c6e199ca502278c4460044efa40f4be0c9
