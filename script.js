
/*****arrow function */

/*let number = () =>10 ;
console.log(number());

const doMath = (num1,num2) =>{
    const sum = num1 + num2;
    return sum;



}
console.log(doMath(20,30));*/

// const doMath = (num1, num2) =>{
//     const sum = num1 + num2;
//     return sum ;
// }

// console.log(doMath(10,12));

/********truthy / falsy value */

/*var myvar = '';
if(myvar){
    console.log(" i am truthy");
}
else{
    console.log("i am falsy");
}*/

/******ternary operator*****/ //  if, else hocche ternary operator(condition checking)

// var age = 15; 
// var type = ( age>=18)?"adult":"child";
// console.log(type);


//*********Arry find*******

// var numbers = [1,4,5,97,233,4,5,2];

//  var result = numbers.find(function(currentValue){
//     return currentValue > 4;
// });

// console.log(result);

var numbers = [1,4,3,5,6,7,3,5,20];

var result = numbers.find((value)=>{
    return value> 7;
})

console.log(result);
//**************array findIndex **********

// var numbers = [1,4,5,97,233,4,5,2];
// var result = numbers.findIndex((currentValue,index,arr)=>{
//     return currentValue >9;
// })
// console.log(result);

/********array filter */

// var number = [1,43,76,7,3,4,5,10];

// var result = number.filter((value, index,array)=>{
//     return value > 10;
// });

// console.log(result);

//********slice********

// var numbers = [1,6,7,2,4,6,8,9];

// var newNumner = numbers.slice(2,5);
// console.log(newNumner);

//********splice********

// var numbers = [1,2,3,4,5];
// var result = numbers.splice(1,2,10,12,13,19);

// console.log(numbers); //main array ke change kore fele , result pabo main array te 
//******concat*****

// var numbers1  = [1,2,3,4,5];
// var numbers2 = [6,7,8,9,10];

// var result = numbers1.concat(numbers2);

// console.log(result);

//********reduce method*********

// var numbers = [1,2,3,5,2,3,8];

// var sum = numbers.reduce((prevalue,currentValue)=>{
//     return prevalue +currentValue;
// },0);

// var numbers = [1,3,4,2,5,6,7,9];

// var sum = numbers.reduce((prevalue,currentValue)=>{
//     return prevalue + currentValue ;
// },0)

// console.log(sum);

// console.log(sum);

//for loop, for in , for of

// for (var i = 0 ; i<= 5 ; i++){
//     console.log(i)
// }

// console.log(i);

//for in (eta shudu object er moddhe kaaj korbe);

const myObj = {
    name : 'javaScript',
    estd : '1995',
    founder :'barden eich'
};

for (Element of myObj){
    console.log(Element);
}

var user = {
    name : "Sharmin Sultana",
    age  : 25,
    homeTown: "gazipur",
     address : "Banasree"
}
for(property in user){
    console.log(property);
}
    // for of (array er moddhe eta kaaj kore)

//const myArray = [1,2,3,5,6];  // in dile index dekhabe  & of dile element gulu pabo

// // for (Element of myArray){
//     console.log(Element);
// }

//************spread operator***** //// javaScript array and object hocche refference type , immutable , mane ager reference dhore rakhe

// var numbers = [1,2,3];  

// var  NewNumbers = [...numbers,4,5,6];

// console.log(NewNumbers);

// reference dhore rakhe example

// var numbers = [1,2,3];

// var a = numbers;

// numbers.push(10);

// console.log(numbers);
// console.log(a);

//spread operator reference dhore rakhe nah 

// var numbers = [1,4,6,2,3];
// var a = [...numbers];
// numbers.push(90);
// console.log(numbers);
// console.log(a);

//so, numbers &  a array hocche reffrence dhore rakhe nah


//destructuring of object

// const user ={
//     id: 222,
//     name : 'sharmin',
//     age:25
// }
 
// const {name} = user;
// console.log(name);

//destructuring of array

// var numbers = [1,2,3,4,5];

// var [a,b] = numbers;
// console.log(a,b);

//chainning 

// var employee = {
//     ide:'VS Code',
//     designation:'developer',
//     machine:'mac',
//     lang:['html','css','js'],
//     specification:{
//         height : 66,
//         weight: 67,
//         address:'kapasia',
//         drink :'water',
//         watch:{
//             color:'black',
//             price:500,
//             brand:'garmin'
//         }

//     }
// }

// var { machine,idea} = employee;
// var {brand} = employee?.specification?.watch;

// const person = {
//     firstName : 'john',
//     lastName  : 'doe',
//     age        : 50,
//     eyeColor   : 'blue'
// };

// console.log(person.age);





