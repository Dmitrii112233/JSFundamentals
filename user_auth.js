// Задача 11: Оптимизированная проверка логина и пароля с динамическим вводом

const correctUsername = "admin";
const correctPassword = "123456";

const username = prompt("Введите имя пользователя:");
const password = prompt("Введите пароль:");

//  проверка
if (!username?.trim() || !password?.trim()) {
  console.log("Validation Error");
  
} else if (username !== correctUsername || password !== correctPassword) {
  const errorMessage = username !== correctUsername
    ? "Incorrect username"
    : "Incorrect password";
  console.log(errorMessage);
} else {
  console.log(`Hello ${username}`);
}
