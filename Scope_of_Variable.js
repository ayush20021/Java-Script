let a = 10;  // Global variable
console.log(a);

// Named function
function meth1(){
    let b = 20;  //Local variable
    console.log(b);
}
meth1();

// Arrow functions
const meth2 = () => {
    let c = 30;
    console.log(c);
};
meth2();

// Anonymous Functions

const meth3 = function(){
    let d = 40;
    console.log(d);
};
meth3();
