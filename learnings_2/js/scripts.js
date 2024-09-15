// 
/* This is a comment */
// const buttonA = document.querySelector("#button_A");
// const headingA = document.querySelector("#heading_A");
//
// let count = 1;
//
// buttonA.onclick = () => {
//     buttonA.textContent = "Try again!";
//     headingA.textContent = `${count} clicks so far`;
//     count += 1;
// }

let myName = "Chris";
let myAge = 17;
// Arrays
let myNameArray = ["Chris", "Bob", "Jim"];
let myNumberArray = [10, 15, 40];
// Objects
let dog = {
    name: "Spot",
    breed: "Dalmatian"
};

function logName() {
    console.log(myName);
    console.log(myAge);
    console.log(myNameArray[0]);
    console.log(myNumberArray[2]);
    console.log(dog.name);
}

logName();


let myNumber = "500";
console.log(typeof myNumber);
myNumber = 500;
console.log(typeof myNumber);


