
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

// FIXING CAPITALIZATION
const list2 = document.querySelector((".output2 ul"));

