

// const meth2 = (a,b) =>{
//     console.log(a+b);
// }


// function meth1(callback){
//     console.log("Meth 1 Called");
//     callback(1,2)
// }
// meth1(meth2)


// Promise   with method chain call
function meth1(){
    

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello Bro 😁")
        }, 5000);
    })
}

function meth2(){
    

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("How are you 👍");
        }, 3000);
    })
}


function meth3(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Bye bro 👋");
        }, 2000);
    })
}




// meth1().then(value =>{
//     console.log(value);
//      return meth2()
//     })
//     .then(value =>
//         {console.log(value);
//         return meth3()})
//     .then(value =>
//         {console.log(value);
//         console.log("All check ok");})
//     .catch(e => console.error(e))





    // Promise with async/await
    async function allMeth(){

       try {
         const meth11 = await meth1();
         console.log(meth11);
 
 
         const meth22 = await meth2();
         console.log(meth22);
 
 
         const meth33 = await meth3();
         console.log(meth33);
       } catch (error) {
        console.error(error);
       }

        console.log("Hello");
    }


    allMeth()







        


