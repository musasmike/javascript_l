const myInt = 5;
const myFloat = 6.667;
console.log(typeof myInt);
console.log(typeof myFloat);

const lotsOfDecimal = 1.766584958675746364;
console.log(lotsOfDecimal);
const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
console.log(twoDecimalPlaces);
console.log(typeof twoDecimalPlaces);

let myNumber = "74";
myNumber += 3;
console.log(myNumber);
console.log(typeof myNumber);

console.log("----------------");

const num1 = 10;
const num2 = 50;
console.log(9 * num1);
console.log((num2 % 9) * num1);
console.log(num2 + num1 / 8 + 2);

console.log("----------------");

let num3 = 4;
num3++;
console.log(num3);

let num4 = 6;
num4--;
console.log(num4);


const btn = document.querySelector("button");
const txt = document.querySelector("p");

btn.addEventListener("click", updateBtn);

function updateBtn() {
    if (btn.textContent === "Start machine") {
        btn.textContent = "Stop machine";
        txt.textContent = "The machine has started";
    } else {
        btn.textContent = "Start machine";
        txt.textContent = "The machine has stopped.";
    }
}

/* STRINGS */
const name = "Chris";
const greeting = `Hello, ${name}!`;
console.log(greeting);

const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined);

const button = document.querySelector(".string");

function greet() {
    const name = prompt("What is your name?");
    const greeting = document.querySelector("#greeting");
    greeting.textContent = `Hello ${name}, nice to see you!`;
}

button.addEventListener("click", greet)

// Including expressions in strings
const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${
    (score / highestScore) * 100
}%.`
console.log(output);

// Numbers vs. strings
const name1 = "Front ";
const number = 242;
console.log(name1 + number);

const myString = "123";
const myNum = Number(myString);
console.log(typeof myNum);

const myNum2 = 123;
const myString2 = String(myNum2);
console.log(typeof myString2);


// USEFUL STRING METHODS
const browserType = "mozilla";
console.log(browserType.length);
console.log(browserType[0])
console.log(browserType[browserType.length - 1])

if (browserType.includes("zilla")) {
    console.log("Found zilla");
} else {
    console.log("No zilla here!")
}

if (browserType.startsWith("zilla")) {
    console.log("Found zilla!");
} else {
    console.log("No zilla here!")
}

if (browserType.endsWith("zilla")) {
    console.log("Found zilla!");
} else {
    console.log("No zilla here!")
}

// Finding the position of a substring in a string
const tagline = "MDN - Resources for developers, by developers";
console.log(tagline.indexOf("developers"));
// if not found returns -1
console.log(tagline.indexOf("x"));

const firstOccurrence = tagline.indexOf("developers");
// search for "developers" starting at index 21 (firstOccurrence + 1)
const secondOccurrence = tagline.indexOf("developers", firstOccurrence + 1);

console.log(firstOccurrence);
console.log(secondOccurrence);

// Extracting a substring from a string
console.log(browserType.slice(1, 4));
console.log(browserType.slice(2));

// Changing case
const radData = "My NaMe Is MuD";
console.log(radData.toLowerCase());
console.log(radData.toUpperCase());

// Replacing strings
const updated = browserType.replace("moz", "van");

console.log(updated);
console.log(browserType);

let quote = "To be or not to be";
quote = quote.replaceAll("be", "code");

console.log(quote);

// FILTERING GREETING MESSAGES
const list = document.querySelector(".output ul");
list.textContent = "";
const greetings = [
    "Happy Birthday!",
    "Merry Christmas my love",
    "A happy Christmas to all the family",
    "You\'re all I want for Christmas",
    "Get well soon"
];

for (const greeting of greetings) {
    if (greeting.includes("Christmas")) {
        const listItem = document.createElement("li");
        listItem.textContent = greeting;
        list.appendChild(listItem);
    }
}


