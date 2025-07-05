//username or password
function login(username, password) {
    if (username === "rafay5584@gmail.com" && password === "112233") {
        return true;
    } else {
        return false;
    }
}

console.log(login("rafay5584@gmail.com", "112233")); 
//sum of numbers
let input = prompt("Enter 1 to continue:");

if (input === "1") {
    let num1 = prompt("Enter your first number");
    let num2 = prompt("Enter your second number");

    function sum(a, b) {
        return a + b;
    }

    let result = sum(Number(num1), Number(num2));
    alert("Sum of " + num1 + " and " + num2 + " is: " + result);
}
