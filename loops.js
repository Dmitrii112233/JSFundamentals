let a = parseInt(prompt("Enter the starting number (a):"));
let b = parseInt(prompt("Enter the ending number (b):"));

// a <= b
if (a > b) {
    [a, b] = [b, a];
}

// ----------- FOR loop -----------
let sumFor = 0;
for (let i = a; i <= b; i++) {
    if (i % 2 === 0) {
        sumFor += i;
    }
}
console.log("Sum using for: " + sumFor);

// ----------- WHILE loop -----------
let sumWhile = 0;
let i = a;
while (i <= b) {
    if (i % 2 === 0) {
        sumWhile += i;
    }
    i++;
}
console.log("Sum using while: " + sumWhile);

// ----------- DO...WHILE loop -----------
let sumDoWhile = 0;
i = a;
do {
    if (i % 2 === 0) {
        sumDoWhile += i;
    }
    i++;
} while (i <= b);
console.log("Sum using do...while: " + sumDoWhile);

