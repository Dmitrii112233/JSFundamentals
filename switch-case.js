// Задача 1: Вывод числа словами (Switch Case)

function digitToWord(n) {
    let result;

    // + Используем switch-case для сопоставления числа и слова
    switch (n) {
        case 0: result = "Zero"; break;
        case 1: result = "One"; break;
        case 2: result = "Two"; break;
        case 3: result = "Three"; break;
        case 4: result = "Four"; break;
        case 5: result = "Five"; break;
        case 6: result = "Six"; break;
        case 7: result = "Seven"; break;
        case 8: result = "Eight"; break;
        case 9: result = "Nine"; break;
        default: result = n + " is not a digit";
    }

    return result;
}

// + Примеры использования:
console.log("== Задача 1 ==");
console.log(digitToWord(1));   // One
console.log(digitToWord(10));  // 10 is not a digit
