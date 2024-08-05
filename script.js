// Define variables
let noun = "wizard"; // a word (noun)
let adjective = "mysterious"; // a word (adjective)
let verb = "fly"; // a word (verb)
let number = 3; // a numeric value
let numberExpression = number * 2 + 1; // a number calculated from an expression
let isMagic = true; // a true/false value

// Prompt for user input
let userWord = prompt("Enter a magical object:");

// Create a story
let story = "Once upon a time, in a " + adjective + " land, there lived a " + noun + 
            " who loved to " + verb + ". The " + noun + " had " + number + 
            " magical items, but the most powerful was the " + userWord + 
            ". With it, the " + noun + " could " + verb + " " + numberExpression + 
            " times higher. It was said that the " + noun + "'s power was " + isMagic + 
            ", but no one knew for sure.";

// Output the story
console.log(story);