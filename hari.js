let x=1;
for(x;x<=10;x++){
   console.log(x)
}
let x=2;
for(x;x<=20;x+=2){
    console.log(x)
}
let countDiv7=0;
for(let x=1;x<=100;x++){
    if(x%7===0){
        countDiv7++;
    }
}
console.log(countDiv7);
for (let x=1;x<=100;x++){
    if(x%7===0){
        console.log(x);
    }
}
let x=1;
for (x;x<=50;x+=2)
        console.log(x)
let num=5;
for (let i=1;i<=10;i++){
    console.log(`${i}*${num}=${num*i}`)
}
let factNum=5;
let factorial=1;
for (let i=1;i<=factNum;i++){
    factorial*=i;
}
console.log(`Factorial of ${factNum} is ${factorial}`)
let x=100;
for(x;x>=1;x--){
    console.log(x);
}
let x=1
for(x;x<=20;x++){
    console.log(`${x}^2=${x*x}`);
}
for (let x=2;x<=50;x++){
    let isprime = true;
    for (let y=2;y<=Math.sqrt(x);y++){
        if(x%y===0){
            isprime=false;
            break;
        }
    }
    if (isprime){
        console.log(x);
    }
}
let odd=0;
let even=0;
for (let i=1;i<=100;i++){
    if(i%2===0){
        even++;
    }else{
        odd++;
    }
}
console.log(odd);
console.log(even);
let x=1;
for (x;x<=100;x++){
    if(x===45){
        break;
    }
    console.log(x);
}
let x=1;
for (x;x<=50;x++){
    if(x%4===0){
        continue;
    }
    console.log(x);
}
let x=1;
for(x;x<=50;x++){
    if(x%4===0){
     console.log(x);   
    }
}
