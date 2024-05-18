//Task 1
function processArray(args) {
    const outcome = [];

    for (const num of args) {
        if (num % 2 === 0) {
            outcome.push(num ** 2);
        } else {
            outcome.push(num * 3);
        }
    }

    return outcome;
}

//Example:
const input = [2, 2, 3, 10, 5];
const output = processArray(input);
console.log(output); 
//Output: [3, 4, 9, 16, 15]


//Task 2
function formatArrayStrings(stringArray, numberArray) {
    const result = [];

    for (let i = 0; i < stringArray.length; i++) {
        const str = stringArray[i];
        const num = numberArray[i];

        if (num % 2 === 0) {
            result.push(str.toUpperCase());
        } else {
            result.push(str.toLowerCase());
        }
    }

    return result;
}

// Example usage:
const inputStrings = ["We", "Are", "The", "Exception"];
const inputNumbers = [2, 1, 5, 6];
const formattedStrings = formatArrayStrings(inputStrings, inputNumbers);
console.log(formattedStrings); // Output: ["WE", "are", "the", "EXCEPTION"]

