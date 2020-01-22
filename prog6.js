function f1(){
    console.log("function with no parms and no return");
}
function f2(userName){
    console.log("function with params and return");
    console.log("recieved" +userName);
}
function f3(userName){
    console.log("function with params and no return");
    console.log("received" +userName);
    return "hello" +userName;
}
f1();
f2("banu");
console.log(f3("banu"));