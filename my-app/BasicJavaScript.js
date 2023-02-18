var myName = 'Hussain';// Run successfully if this variable will change
// const myName = 'Hussain'; // This is throwing an exception because its const variable
console.log(myName);

myName = 'Mohammed1';
console.log(myName);


// function printMyName(name){
//     console.log(name);
// }

const printMyName = (name, age) =>console.log("Inside Arrow Function!", name, age)

printMyName('Hussain', '225');
