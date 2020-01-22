function* dummyGenerator(){
    yield "stage 1 completed";
    yield "stage 2 completed";
    yield "stage 3 completed";
    return "job has completed";
}
function temp(){
    console.log("Iam temp function");
    stages= dummyGenerator();
    shallContinue=true;
    while(shallContinue){
        currStage=stages.next();
        console.log(currStage.value);
        console.log("this is temp function");
        shallContinue=!currStage.done;
    }
}
temp();