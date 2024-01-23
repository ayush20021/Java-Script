try {
    let a;
} catch (e) {
    console.log(e.name);    // Name of Exception
    console.log(e.message);  // Reazon  of Exception
}finally{
    console.log("This will always run");
}
console.log("Hello")