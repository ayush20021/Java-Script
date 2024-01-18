let a = [1, 2, 3, 4, 5, 6, 7, 8];

// Adding
a.push("Frog"); // Add the  element to the end of the array
a.unshift(21);  // Add the element to the Start of the array


// Removing

a.pop(); // Remove the last element of the array
a.shift(); // Remove the first element of the array

console.log(a);

// Map functionality
let b = a.map(function (a) { 
                                 // Advanced for loop iteration
    return  a*5;

})

console.log(b);

// Filter functionality
let  c = a.filter(function (a) { 
    return a%2==0;             // Type of if else condition
});

console.log(c);

// Reduce functionality

let d = a.reduce(function(a,b) {
    return a+=b;                  // Add the element to the end of the array
})
console.log(typeof (d));
