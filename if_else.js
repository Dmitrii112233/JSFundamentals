let input = prompt("Enter a number:");

if (isNaN(input)) {
  alert("Error");
} else {
  let number = Number(input);
  
  if (number > 0) {
    alert("1");
  } else if (number < 0) {
    alert("-1");
  } else {
    alert("0");
  }
}
