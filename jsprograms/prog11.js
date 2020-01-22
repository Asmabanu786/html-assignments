function* countPrimesInRange(cd,md){
    count=0;
    for(i=cd;i<=md;i++){
        curNum=i;
        factCount=2;
        for(j=2;j<=curNum/2;j++){
            if(curNum%j==0){
                factCount++;
            }
        }
        if(factCount==2){
            count++;
            yield curNum;
        }
    }
    return count;
}
function main(){
    console.log("job is started");
    stages=countPrimesInRange(10,20);
    shallContinue=true;
    while(shallContinue){
        curStage=stages.next();
        shallContinue=!curStage.done;
        if(shallContinue){
            console.log("detected" +curStage.value+"as prime");
        }else{
            console.log("total Number of Primes" +curStages.value);
         }
    }
    console.log("job terminated");
}

    main();