function main(a){
    console.log(a());
    
}
main (function(){
    return "iam cbf1"

})
main(function(){
    return "iam cbf2"
})



function operation(task){
    console.log(task(1,10));

}
operation(function(a,b){
    return a+b;
})
operation(function(a,b){
    return a*b;
})
operation(function(a,b){
    return a-b;
})

let a =()=> console.log("Hello Rachel");
a();

// 2) explicit return arrow fucntion
//--> return keyword is mandatory
let b = ()=>{return "Hello Minh"}
console.log(b());
b();
let d=()=>console.log("Minh like to play football");
d();

let main1=(task)=>{
    console.log(task(2,10));

}
main1((a,b)=>{
    return a+b ;
})

