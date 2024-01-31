
document.getElementById("submit").addEventListener("click",()=>{
    // const uname = document.getElementById("name").value
    // localStorage.setItem("uname",uname)
    // console.log(uname);

    // if(finalStatus){
    //     alert("Login OK")
    // }else{
    //     alert("Why are you so Dumb Nigga 😐")
    // }

    if(s1 && s2 && s3 == true){
        // console.log(true);
        alert("Your password is strong 💯")
    }else{
        // console.log(false);
        alert("Why are you so Dumb Nigga 😐 !!")
    }
    // console.log(finalStatus);
})
// console.log(localStorage.getItem("uname"));

// let finalStatus = true;
let s1
let s2 
let s3 
let s4 



document.getElementById("password").addEventListener("keyup",()=>{
    const value = document.getElementById("password").value
    if (value.length >= 6) {
        s1 = true
        document.getElementById("l").style.backgroundColor="green"
        
    } else {
        document.getElementById("l").style.backgroundColor = "red"; 
        s1=false
    }
    
    if(ChechkUpperCase(value)){
        s2 = true
        document.getElementById("u").style.backgroundColor="green"
    }else{
        document.getElementById("u").style.backgroundColor="red"
        s2=false
    }

    if(ChechLowerCase(value)){
        s3 = true
        document.getElementById("lw").style.backgroundColor="green"
    }else{
        document.getElementById("lw").style.backgroundColor="red"
       s3=false
    }

    const a = /[^a-zA-Z0-9]/;
    let b = a.test(value)
    if(b){
       
        document.getElementById("s").style.backgroundColor="green"
    }    else{
        document.getElementById("s").style.backgroundColor="red"
        s4=false
    }


})



function ChechkUpperCase(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 'A' && str[i] <= 'Z') {
            return true; // Found an uppercase letter
        }
    }
    return false; // No uppercase letter found
}


function ChechLowerCase(str){
    for(let i = 0;i<str.length;i++){
        if(str[i]>='a'&& str[i]<='z'){
            return true
        }
    }
    return false
}


