const a = document.getElementById("myid")

const data = document.getElementsByClassName("abc")

const cars = document.getElementsByTagName("li")

a.style.backgroundColor="blue"

for(let i = 0;i<data.length;i++){
    data[i].style.alignItems="center"
    data[i].style.backgroundColor="blue"
    data[i].textContent="Ayush"
    console.log(data[i].textContent);

    
}

for(let i = 0;i<cars.length;i++){
    console.log(cars[i].textContent);
    cars[i].style.backgroundColor='red'
    cars[i].style.alignItems="center"
}

// for(let car of cars){
// car.style.backgroundColor="green"

// }



