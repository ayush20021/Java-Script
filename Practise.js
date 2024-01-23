

const meth2 = (a,b) =>{

   

    console.log(a+b);
}


function meth1(callback){
    console.log("Meth 1 Called");
    callback(1,2)
}
meth1(meth2)