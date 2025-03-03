console.log(Math.PI)
Math.PI = 5
console.log(Math.PI)

const pi = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(pi)

const myNewObject = Object.create(null)// just a way of creating object

const ye = {
    name: "Kanye",
    skill: "retarded",
    deathOfYe: function(){
        console.log("Ye died")
    }
}

console.log(Object.getOwnPropertyDescriptor(ye, 'name'))

Object.defineProperty(ye, 'name', {
    // writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(ye,'name'))

for (const [key, value] of Object.entries(ye)) {
    if (typeof value == 'function') {
        continue
    }
    console.log(`${key}: ${value}`)
}

