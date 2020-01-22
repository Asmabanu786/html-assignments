today=new Date();
console.log(today);
myDOB=new Date("1997-12-01");
console.log(myDOB);
age=today.getFullYear()-myDOB.getFullYear();
console.log(age);
console.log(today.toISOString());
console.log(today.toDateString());
console.log(today.toTimeString());
