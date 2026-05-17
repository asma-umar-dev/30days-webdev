// ================================
// DIN 09 — JavaScript Basics
// Asma Umar — 30 Day Web Dev
// ================================

const naam = "Asma"
const course = "30 Day Web Dev"
let din = 9

console.log("=== Variables ===")
console.log("Naam:", naam)
console.log("Course:", course)
console.log("Din:", din)

console.log("\n=== Data Types ===")
console.log(typeof "Asma")       
console.log(typeof 25)           
console.log(typeof true)         

console.log("\n=== Functions ===")

function greet(naam) {
    return "Salam " + naam + "!"
}
console.log(greet("Asma"))
console.log(greet("Pakistan"))

function add(a, b) {
    return a + b
}
console.log("3 + 4 =", add(3, 4))

function isEven(n) {
    return n % 2 === 0 ? "Even" : "Odd"
}
console.log("7 hai:", isEven(7))
console.log("8 hai:", isEven(8))

function celsiusToFahrenheit(c) {
    return (c * 9/5) + 32
}
console.log("100C =", celsiusToFahrenheit(100), "F")

console.log("\n=== FizzBuzz ===")
for (let i = 1; i <= 20; i++) {
    if (i % 15 === 0)     console.log("FizzBuzz")
    else if (i % 3 === 0) console.log("Fizz")
    else if (i % 5 === 0) console.log("Buzz")
    else                  console.log(i)
}

console.log("\n=== Tip Calculator ===")
function tipCalculator(bill, tipPercent) {
    const tip = (bill * tipPercent) / 100
    const total = bill + tip
    console.log("Bill:", bill)
    console.log("Tip:", tip)
    console.log("Total:", total)
}
tipCalculator(1500, 15)

console.log("\n=== Password Validator ===")
function validatePassword(password) {
    if (password.length < 8) {
        return "❌ Kam az kam 8 characters chahiye!"
    }
    if (!/[0-9]/.test(password)) {
        return "❌ Ek number hona chahiye!"
    }
    if (!/[A-Z]/.test(password)) {
        return "❌ Ek uppercase letter hona chahiye!"
    }
    return "✅ Password strong hai!"
}
console.log(validatePassword("abc"))
console.log(validatePassword("asma1234"))
console.log(validatePassword("Asma1234"))

console.log("\n✅ DIN 09 Complete — Asma Umar!")