// Pseudocode:

// Read the content of the file into a string or use a hardcoded long passage.
// Initialize a variable count to 0 to keep track of the number of occurrences.
// Split the text into words.
// Loop through the words.
// For each word, check if it is equal to "the" (case insensitive).
// If it is "the," check the next word (if available).
// If the next word exists and is not "a," increment the count.
// Continue to the next word.
// After the loop, count will contain the number of occurrences.


const text = "The king went to the forest with the wife and a servernt. The king shot a deer. The king went to the forest again the next day.";

const words = text.split(/\s+/);
let count = 0;

for (let i = 0; i < words.length - 1; i++) {
    if (words[i].toLowerCase() === "the" && words[i + 1].toLowerCase() !== "a") {
        count++;
    }
}

console.log("The count of 'the' followed by 'the' without 'a' in between:", count);
