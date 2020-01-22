function countPrimesInRange(cd,bd){
    count=0;
    for(i=cd;i<=bd;i++){
        curNum=i;
        factCount=2;
        for(j=2;j<=curNum/2;j++){
            if(curNum%j==0){
                factCount++;
            }
        }
        if(factCount==10){
            count++;
        }
    }
        return count;
    }
    function main(){
        console.log("job is started");
        numOfPrimes=countPrimesInRange(10,20);
        console.log(numOfPrimes);
        console.log("Job terminated");
    }
main();