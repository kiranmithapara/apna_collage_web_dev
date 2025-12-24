// console.log("kiran mithapara");

// let name="kiran";

// console.log(name);

// if("a">"A"){
//     console.log("true")
// };

// const student ={
//     name:"kiran",
//     marks:{eng : 89,guj:83,math:95},
//     rollNo : 89,
//     address : "Surendranagar"
// };

// let num = Math.floor(Math.random()*100);
// console.log(num);

// console.log(student.marks.eng);

// function printName(name){
//     console.log("My Name is "+name);
// }

// printName("jaydeep")

// let say = "namaste"
// function hello(){
//     say = "hello"
//     console.log(say);
//     function changehello(){
//         console.log(say);

//     }
//     changehello()


// }
// console.log(say);

// hello();


// function sum(a,b){
//     return a+b;
// }
// let a=15;
// let b=25;

// console.log(sum(a,b));


// let sub=function(){
//     console.log("My Name is ");
// }
// sub()


// function subname(func,count){
//     for(let i =1;i<=count;i++){
//         func()
//     }
// }

// subname(sub,5);


// const calculator={
//     sub:function(a,b){
//         return a-b;
//     },
//     sum:function(a,b){
// return a+b;
//     },
//     mul(a,b){return a*b}
// }

// console.log(calculator.sub(15,5));

// console.log(calculator.mul(5,10))


const student ={
    name:"kiran mithapara",
    age : 25,
    math :98,
    eng : 97,
    guj : 99,
    avgmarsk(){ return((student.math+this.eng+this.guj)/3)}
}

console.log(student.avgmarsk())

function name(){
    console.log(this)
}

name();


