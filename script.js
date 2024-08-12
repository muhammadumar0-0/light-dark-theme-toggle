const sunMoonContainer = document.querySelector('.sun-moon-container')

document.querySelector('.theme-toggle-button').addEventListener ('click', () => {
    document.body.classList.toggle('dark')
    const currentRotation = parseInt(getComputedStyle(sunMoonContainer).getPropertyValue('--rotation'))
    sunMoonContainer.style.setProperty('--rotation', currentRotation + 180)
    // console.log(currentRotation)
})

// let sayHi = (name) => {
//     console.log(`hi ${name}`)
// }

// function sayHello(name, name2) {
//     console.log(`hello ${name}`)
// }


// function print(value) {
//     console.log(value)
// }

// function useCallBack(callback) {
//     callback("Hellooo")
// }

// useCallBack(print)

// const callBack = console.log;
// callBack("Hellod")



// function print(value) {
//     console.log(value)
// }

// print.hi = 'test'
// print.bi = 'gay'
// console.dir(print)


// function hi(val) {
//     console.log("HIYAAA")
// }



// function sum(a, b) {
//     return a + b
// }


// let sum2 = (a, b) => a + b


// function isPositive(number) {
//     return number >= 0
// }

// let isPositive2 = number => number >=0 

// function randomNumber() {
//     return Math.random
// }

// let randomNumber2 = () => Math.random

// document.addEventListener('click', function() {
//     console.log('Click')
// })

// document.addEventListener('click', () => console.log('Click'))

// class Person {
//     constructor(name){
//         this.name = name
//     }

//     printNameArrow() {
//         setTimeout(() => {
//             console.log('Arrow: ' + this.name)
//         }, 100)
//     }

//     printNameFunction() {
//         setTimeout(function() {
//             console.log('Function: ' + this.name)
//         }, 100)
//     }
// }

// let person  = new Person('Umar')
// person.printNameArrow()
// person.printNameFunction()


// log('hello')
// log2('hii')

// function log(val) {
//     console.log(val)
// }

// const log2 = (val) => console.log(val)
// log2('hii')


// const myName = "Muzammail"

// function printName() {
//     console.log(myName)
// }

// printName()

function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('Outer Variable ' + outerVariable)
        console.log(`Inner Variable ${innerVariable}`)
    }
}

const newFunction = outerFunction('outside')
newFunction('inside')

// function outerFunction(url) {
//     fetch(url).then(() => console.log(url)
//     )
// }

// outerFunction("index2.html")

// console.log(0 == '')

// const a = [["A", "B"], [1, 2]]


// console.log(a)

// a[0] = 1

// console.log(a.reverse)

const items = [
    { name: 'Bike',     price: 100},
    { name: 'TV',     price: 200},
    { name: 'Album',     price: 10},
    { name: 'Book',     price: 5},
    { name: 'Phone',     price: 500},
    { name: 'Computer',     price: 1000},
    { name: 'Keyboard',     price: 25}
]

const items2 = [1, 2, 3, 4, 5, '1']


const includesTwo = items2.includes('1')

console.log(includesTwo)


