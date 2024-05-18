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
