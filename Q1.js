//Q1 
const Persone = {
    name:"Ayush",
    Age:21,
    gender:'M'
}

const Value = Object.values(Persone)
console.log(Value)

// Q2
const square =  ( a)=>{
return a *a
}

console.log(square(2))


let a = [1,2,3,4,5,6,7,8,9]

//Q3

const multiplyByTwo = function(arr){
    let b2 = arr.map(function(a){
        return a*2;
    })
    console.log(b2)
}

multiplyByTwo(a)

//Q4
function FilterEvenNumbers(arr){
let a1 = arr.filter(function(a){
   return a%2==0;
})

console.log(a1)
}
FilterEvenNumbers(a)


//Q5 -1
const Map = a.map(function(a){
    return a*a
})
console.log(Map)

//Q5 -2
const Filter = a.filter(function(a){
    return a%2==0;
})
console.log(Filter)

//Q5 -3
const Reduce = a.reduce(function(a,b){
    return a+=b;
})
console.log(Reduce)