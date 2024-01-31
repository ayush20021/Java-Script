let person={
    Name:"Ayush",
    Age:21,
    Gender:"Mae"
}
console.log(person);

let a=[1,2,3,4,5,6,7,8,9]

let ArrpwFunction = (num)=>{
return num*num
}

console.log(ArrpwFunction(2));


let multiplyByTow =function(arr){
const ab = arr.map((a)=>{
    return a*2
})

return ab
}

console.log(multiplyByTow(a));

function FilterNumner(arr){

    const ab = arr.filter((a)=>{
        return a%2 ==0
    })

    return ab

}

console.log(FilterNumner(a));

let Reduce = (arr)=>{
let a = arr.reduce((a,b)=> {
    return a+=b
})
return a

}
console.log(Reduce(a));

const data = {
    Name:"Ayush",
    Gender:"M",
    Marks:[80,90,100]
}

const {Name,Gender,Marks:[Maths,Science,English]}=data
console.log(Name);

function meth1(status){

    
        return new Promise((resolve, reject) => {
            if(status){
                resolve("You are good to Go")
            }else{
                reject(new Error("Not this time bro"))
            }
        })
    
}



meth1(false)
.then((message) => {
    console.log("Success:", message);
})
.catch((error) => {
    console.error("Error:", error.message);
});

let newList = document.createElement("li")
newList.innerHTML="Adit"

let mainList = document.getElementById("list")
mainList.appendChild(newList)
let a1 = "a@gmal.com"

