// ================================
// DIN 10 — Arrays aur Objects
// Asma Umar — 30 Day Web Dev
// ================================

// ============================================================
// SECTION 1: Arrays — Basic
// ============================================================

console.log("=== SECTION 1: Arrays ===")

const fruits = ["apple", "banana", "mango", "orange"]
console.log(fruits)
console.log(fruits[0])    
console.log(fruits.length)  


fruits.push("grapes")      
console.log(fruits)
fruits.pop()               
console.log(fruits)

fruits.unshift("strawberry") 
console.log(fruits)
fruits.shift()               
console.log(fruits)

// ============================================================
// SECTION 2: Array Iteration
// ============================================================

console.log("\n=== SECTION 2: Array Methods ===")

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

const sum = numbers.reduce((acc, n) => acc + n, 0)
console.log("Sum:", sum)


const avg = sum / numbers.length
console.log("Average:", avg)


const max = numbers.reduce((a, b) => a > b ? a : b)
console.log("Max:", max)

const min = numbers.reduce((a, b) => a < b ? a : b)
console.log("Min:", min)

console.log("\n-- forEach --")
fruits.forEach(fruit => console.log("Fruit:", fruit))

console.log("\n-- map --")
const upper = fruits.map(f => f.toUpperCase())
console.log(upper)

console.log("\n-- filter --")
const longFruits = fruits.filter(f => f.length > 5)
console.log(longFruits)

const found = fruits.find(f => f === "mango")
console.log("Found:", found)


console.log("Some > 10:", numbers.some(n => n > 10))
console.log("Every > 0:", numbers.every(n => n > 0))

// ============================================================
// SECTION 3: Objects
// ============================================================

console.log("\n=== SECTION 3: Objects ===")

const student = {
    naam: "Asma",
    umar: 20,
    course: "30 Day Web Dev",
    active: true
}

console.log(student.naam)
console.log(student.course)

console.log(student["umar"])


const person = {
    naam: "Ali",
    greet: function() {
        return "Salam! Main " + this.naam + " hun!"
    }
}
console.log(person.greet())

// ============================================================
// SECTION 4: Destructuring + Spread
// ============================================================

console.log("\n=== SECTION 4: Destructuring ===")

const [first, second, ...rest] = fruits
console.log("First:", first)
console.log("Second:", second)
console.log("Rest:", rest)

const { naam, course } = student
console.log("Naam:", naam)
console.log("Course:", course)

const moreFruits = [...fruits, "kiwi", "pineapple"]
console.log("More fruits:", moreFruits)

// ============================================================
// SECTION 5: Array of Objects
// ============================================================

console.log("\n=== SECTION 5: Array of Objects ===")

const users = [
    { id: 1, naam: "Asma",  active: true,  age: 20 },
    { id: 2, naam: "Ali",   active: false, age: 25 },
    { id: 3, naam: "Sara",  active: true,  age: 22 },
    { id: 4, naam: "Ahmed", active: false, age: 28 },
    { id: 5, naam: "Hina",  active: true,  age: 19 },
]

const activeUsers = users.filter(u => u.active)
console.log("Active Users:", activeUsers)

const nameList = activeUsers.map(u => u.naam)
console.log("Active Names:", nameList)

// ============================================================
// SECTION 6: Shopping Cart
// ============================================================

console.log("\n=== SECTION 6: Shopping Cart ===")

let cart = []

// Item add karo
function addItem(naam, price, qty) {
    const item = { naam, price, qty }
    cart.push(item)
    console.log(`✅ "${naam}" cart mein add hua!`)
}

function removeItem(naam) {
    cart = cart.filter(item => item.naam !== naam)
    console.log(`❌ "${naam}" cart se remove hua!`)
}

function getTotal() {
    const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0)
    console.log("🛒 Cart Total: Rs.", total)
    return total
}


function showCart() {
    console.log("\n--- Aap ka Cart ---")
    if (cart.length === 0) {
        console.log("Cart khali hai!")
        return
    }
    cart.forEach(item => {
        console.log(`${item.naam} x${item.qty} = Rs. ${item.price * item.qty}`)
    })
}


addItem("Shirt", 1500, 2)
addItem("Pants", 2500, 1)
addItem("Shoes", 3500, 1)
showCart()
getTotal()
removeItem("Pants")
showCart()
getTotal()

// ============================================================
// SECTION 7: Flatten nested array (flat() ke baghair)
// ============================================================

console.log("\n=== SECTION 7: Flatten Array ===")

const nested = [1, [2, 3], [4, [5, 6]], [7, 8, 9]]

function flatten(arr) {
    let result = []
    arr.forEach(item => {
        if (Array.isArray(item)) {
            result = result.concat(flatten(item))
        } else {
            result.push(item)
        }
    })
    return result
}

console.log("Nested:", nested)
console.log("Flat:", flatten(nested))

console.log("\n✅ DIN 10 Complete — Asma Umar!")