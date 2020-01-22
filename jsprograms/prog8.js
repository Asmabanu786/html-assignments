simpleGreetProvider =function(){
    return "Hello";
}
timelyGreetProvider = function(){
    greet="";
    hour =(new Date()).getHours();
    if(hour>=3 && hour<=11) greet="Assalamu alaikum";
    else if(hour<=15) greet="Shabba khair";
    else greet="Khuda hafiz";
    return greet;
}
function greetUser(userName,greetProvider){
    return greetProvider() +" " +userName;
}
console.log(greetUser("pappa",simpleGreetProvider));
console.log(greetUser("sanu",timelyGreetProvider));
console.log(greetUser("sanu",function(){return "Bismillah";}));
console.log(greetUser("Ashu",()=>"kaise ho"));
console.log(greetUser("jalal",()=>"Pyaare bache"));
(function(){
    console.log("Keep smiling");
})();